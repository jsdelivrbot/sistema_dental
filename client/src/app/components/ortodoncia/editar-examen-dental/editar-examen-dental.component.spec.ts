import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenDentalComponent } from './editar-examen-dental.component';

describe('EditarExamenDentalComponent', () => {
  let component: EditarExamenDentalComponent;
  let fixture: ComponentFixture<EditarExamenDentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarExamenDentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExamenDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
