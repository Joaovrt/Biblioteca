import { Component } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
  livros: Livro[]=[];
  constructor (private livroService: LivroService, private router: Router) {}

  getLivros(): void {
    this.livroService.getLivros()
        .subscribe({
          next: (livros) => {this.livros = livros},
          error: (error) => {
            if (error.status) {
              this.router.navigate(['ohno', error.error.message])
          }
        }
        });
  }

  ngOnInit(): void {
    this.getLivros();
  }


  deleteLivro(livro: Livro) {
    this.livroService.deleteLivro(livro._id).subscribe({
      next: () => {this.getLivros()},
      error: (error) => {
        if (error.status) {
          this.router.navigate(['ohno', error.error.message])
      }
    }
    });
  }

}
