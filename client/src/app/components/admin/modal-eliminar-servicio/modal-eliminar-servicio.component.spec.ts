import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarServicioComponent } from './modal-eliminar-servicio.component';

describe('ModalEliminarServicioComponent', () => {
  let component: ModalEliminarServicioComponent;
  let fixture: ComponentFixture<ModalEliminarServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEliminarServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEliminarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
