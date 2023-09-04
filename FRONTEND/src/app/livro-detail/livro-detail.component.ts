import { Component } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-detail',
  templateUrl: './livro-detail.component.html',
  styleUrls: ['./livro-detail.component.css']
})
export class LivroDetailComponent {
  livro?:Livro;
  updated: Boolean = false;
  
  constructor (
    private route: ActivatedRoute,
    private livroService: LivroService,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getLivro();
  }

  getLivro(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.livroService.getLivro(id)
      .subscribe({
          next: (livro) => {this.livro = livro},
          error: (error) => {
            if(error.status)
              this.router.navigate(['ohno', error.error.message])
          }
      });
  }

  goBack(): void {
    this.location.back();
  }


  onSubmit(form: NgForm) {
    this.updateLivro()
  }


  updateLivro(): void {
    this.livroService.updateLivro(this.livro!)
      .subscribe({
        next: (livro) => {this.livro = livro;
                          this.updated=true},
        error: (error) => {
          if(error.status)
            this.router.navigate(['ohno', error.error.message])
        }
    });
  }
}
