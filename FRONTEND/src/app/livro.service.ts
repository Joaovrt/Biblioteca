import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(
    private http: HttpClient,
  ) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`http://localhost:3000/livros`);
  }

  getLivro(id: string): Observable<Livro> {
    return this.http.get<Livro>(`http://localhost:3000/livro/${id}`);
  }

  createLivro(livro :Livro): Observable<Livro> {
    return this.http.post<Livro>('http://localhost:3000/livro', livro);
  }

  deleteLivro(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/livro/${id}`);
  }

  updateLivro(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`http://localhost:3000/livro/${livro._id}`, livro);
  }

  emprestaLivro(id: string): Observable<Livro> {
    return this.http.get<Livro>(`http://localhost:3000/me_empresta/${id}`);
  }
}
