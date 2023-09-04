import { Component } from '@angular/core';
import { Leitor } from '../leitor';
import { LeitorService } from '../leitor.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leitor-create',
  templateUrl: './leitor-create.component.html',
  styleUrls: ['./leitor-create.component.css']
})
export class LeitorCreateComponent {
  leitor: Leitor = {_id:'', nome: '', livro_id:''};
  createdLeitor?:Leitor;

  constructor(
    private leitorService: LeitorService,
    private location: Location,
    private router:Router,
  ) {}

  goBack(): void {
    this.location.back();
  }

  onSubmit(form: NgForm) {
    this.leitorService.createLeitor(this.leitor).subscribe({

      next: (l) =>{this.createdLeitor = l}, 
      error: (error) => {
        if(error.status)
            this.router.navigate(['ohno', error.error.message])
      }});
  }

}
