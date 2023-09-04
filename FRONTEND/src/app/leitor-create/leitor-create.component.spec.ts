import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorCreateComponent } from './leitor-create.component';

describe('LeitorCreateComponent', () => {
  let component: LeitorCreateComponent;
  let fixture: ComponentFixture<LeitorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeitorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
