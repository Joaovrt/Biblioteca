import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeEmprestaComponent } from './me-empresta.component';

describe('MeEmprestaComponent', () => {
  let component: MeEmprestaComponent;
  let fixture: ComponentFixture<MeEmprestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeEmprestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeEmprestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
