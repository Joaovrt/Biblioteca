import { Component , ViewChild } from '@angular/core';
import { Leitor } from '../leitor';
import { LeitorService } from '../leitor.service';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-me-empresta',
  templateUrl: './me-empresta.component.html',
  styleUrls: ['./me-empresta.component.css']
})
export class MeEmprestaComponent {
  livros: Livro[]=[];
  leitores: Leitor[]=[];
  @ViewChild('form') form!: NgForm;
  selectedLivro?: string;
  selectedLeitor?: string;
  emprestado?:Livro;

  constructor (private location: Location,private livroService: LivroService, private router: Router, private leitorService: LeitorService) {}

  getLivros(): void {
    this.livroService.getLivros()
        .subscribe({
          next: (livros) => {this.livros = livros},
          error: (error) => {
            if (error.status == 500) {
              this.router.navigate(['ohno', error.error.message])
          }
        }
        });
  }

  goBack(): void {
    this.location.back();
  }

  getLeitores(): void {
    this.leitorService.getLeitores()
        .subscribe({
          next: (leitores) => {this.leitores = leitores},
          error: (error) => {
            if (error.status) {
              this.router.navigate(['ohno', error.error.message])
          }
        }
        });
  }

  ngOnInit(): void {
    this.getLeitores();
    this.getLivros();
  }

  onSubmit(form: NgForm) {
    console.log(this.selectedLivro)
    this.livroService.emprestaLivro(this.selectedLivro!).subscribe({
      next: (l) =>{this.emprestado = l}, 
      error: (error) => {
        if(error.status)
            this.router.navigate(['ohno', error.error.message])
      }});
  }
}
