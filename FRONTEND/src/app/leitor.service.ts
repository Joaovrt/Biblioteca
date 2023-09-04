import { Injectable } from '@angular/core';
import { Leitor } from './leitor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeitorService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getLeitores(): Observable<Leitor[]> {
    return this.http.get<Leitor[]>(`http://localhost:3000/leitores`);
  }

  getLeitor(id: string): Observable<Leitor> {
    return this.http.get<Leitor>(`http://localhost:3000/leitor/${id}`);
  }

  createLeitor(leitor :Leitor): Observable<Leitor> {
    return this.http.post<Leitor>('http://localhost:3000/leitor', leitor);
  }

  deleteLeitor(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/leitor/${id}`);
  }

  updateLeitor(leitor: Leitor): Observable<Leitor> {
    return this.http.put<Leitor>(`http://localhost:3000/leitor/${leitor._id}`, leitor);
  }

}
