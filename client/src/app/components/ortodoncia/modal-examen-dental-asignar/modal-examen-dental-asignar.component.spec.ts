import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExamenDentalAsignarComponent } from './modal-examen-dental-asignar.component';

describe('ModalExamenDentalAsignarComponent', () => {
  let component: ModalExamenDentalAsignarComponent;
  let fixture: ComponentFixture<ModalExamenDentalAsignarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExamenDentalAsignarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExamenDentalAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
