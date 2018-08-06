import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRelacionesDentalesComponent } from './editar-relaciones-dentales.component';

describe('EditarRelacionesDentalesComponent', () => {
  let component: EditarRelacionesDentalesComponent;
  let fixture: ComponentFixture<EditarRelacionesDentalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRelacionesDentalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRelacionesDentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
