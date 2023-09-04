import { Component } from '@angular/core';
import { Leitor } from '../leitor';
import { LeitorService } from '../leitor.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leitor-detail',
  templateUrl: './leitor-detail.component.html',
  styleUrls: ['./leitor-detail.component.css']
})
export class LeitorDetailComponent {
  leitor?: Leitor;
  updated=false;

  constructor(
    private route: ActivatedRoute,
    private leitorService: LeitorService,
    private location: Location,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.getLeitor();
  }

  getLeitor(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.leitorService.getLeitor(id)
      .subscribe({
          next: (leitor) => {this.leitor = leitor},
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
    this.updateLeitor()
  }


  updateLeitor(): void {
    this.leitorService.updateLeitor(this.leitor!)
      .subscribe({
        next: (leitor) => {this.leitor = leitor;
                          this.updated=true},
        error: (error) => {
          if(error.status)
            this.router.navigate(['ohno', error.error.message])
        }
    });
  }
}
