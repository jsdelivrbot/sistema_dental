import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarServicioComponent } from './modal-agregar-servicio.component';

describe('ModalAgregarServicioComponent', () => {
  let component: ModalAgregarServicioComponent;
  let fixture: ComponentFixture<ModalAgregarServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
