import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorDetailComponent } from './leitor-detail.component';

describe('LeitorDetailComponent', () => {
  let component: LeitorDetailComponent;
  let fixture: ComponentFixture<LeitorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeitorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
