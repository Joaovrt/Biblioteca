import { Component } from '@angular/core';
import { Leitor } from '../leitor';
import { LeitorService } from '../leitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leitores',
  templateUrl: './leitores.component.html',
  styleUrls: ['./leitores.component.css']
})
export class LeitoresComponent {

  leitores: Leitor[]=[];
  constructor (private leitorService: LeitorService, private router: Router) {}

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
  }


  deleteLeitor(leitor: Leitor) {
    this.leitorService.deleteLeitor(leitor._id).subscribe({
      next: () => {this.getLeitores()},
      error: (error) => {
        if (error.status) {
          this.router.navigate(['ohno', error.error.message])
      }
    }
    });
  }

}
