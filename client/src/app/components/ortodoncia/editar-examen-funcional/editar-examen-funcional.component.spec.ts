import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenFuncionalComponent } from './editar-examen-funcional.component';

describe('EditarExamenFuncionalComponent', () => {
  let component: EditarExamenFuncionalComponent;
  let fixture: ComponentFixture<EditarExamenFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarExamenFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExamenFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
