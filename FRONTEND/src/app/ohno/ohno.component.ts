import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ohno',
  templateUrl: './ohno.component.html',
  styleUrls: ['./ohno.component.css']
})
export class OhnoComponent {
  message: string = '';

  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.message = this.activatedRoute.snapshot.paramMap.get('message') || '';
  }
}
