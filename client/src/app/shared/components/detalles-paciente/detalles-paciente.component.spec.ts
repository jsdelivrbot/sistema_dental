import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPacienteComponent } from './detalles-paciente.component';

describe('DetallesPacienteComponent', () => {
  let component: DetallesPacienteComponent;
  let fixture: ComponentFixture<DetallesPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
