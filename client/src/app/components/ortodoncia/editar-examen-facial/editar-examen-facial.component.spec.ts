import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenFacialComponent } from './editar-examen-facial.component';

describe('EditarExamenFacialComponent', () => {
  let component: EditarExamenFacialComponent;
  let fixture: ComponentFixture<EditarExamenFacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarExamenFacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExamenFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
