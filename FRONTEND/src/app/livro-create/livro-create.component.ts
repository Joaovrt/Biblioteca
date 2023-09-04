import { Component } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent {

  livro: Livro = { _id: '', nome: 'Nome', autor:'Autor', ano:1999, estoque:5};
  createdLivro?: Livro;

  constructor(private livroService: LivroService, private router: Router, private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }

  onSubmit(form: NgForm) {
    this.livroService.createLivro(this.livro).subscribe({

      next: (l) =>{this.createdLivro = l}, 
      error: (error) => {
        if(error.status)
            this.router.navigate(['ohno', error.error.message])
      }});
  }
}
