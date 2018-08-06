import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarListadoProblemasComponent } from './editar-listado-problemas.component';

describe('EditarListadoProblemasComponent', () => {
  let component: EditarListadoProblemasComponent;
  let fixture: ComponentFixture<EditarListadoProblemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarListadoProblemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarListadoProblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
