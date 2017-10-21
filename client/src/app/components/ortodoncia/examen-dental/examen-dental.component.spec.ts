import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenDentalComponent } from './examen-dental.component';

describe('ExamenDentalComponent', () => {
  let component: ExamenDentalComponent;
  let fixture: ComponentFixture<ExamenDentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenDentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
