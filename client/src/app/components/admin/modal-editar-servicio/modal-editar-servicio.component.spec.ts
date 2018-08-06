import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarServicioComponent } from './modal-editar-servicio.component';

describe('ModalEditarServicioComponent', () => {
  let component: ModalEditarServicioComponent;
  let fixture: ComponentFixture<ModalEditarServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
