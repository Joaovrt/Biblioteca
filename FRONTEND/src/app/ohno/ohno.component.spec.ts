import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhnoComponent } from './ohno.component';

describe('OhnoComponent', () => {
  let component: OhnoComponent;
  let fixture: ComponentFixture<OhnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OhnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
