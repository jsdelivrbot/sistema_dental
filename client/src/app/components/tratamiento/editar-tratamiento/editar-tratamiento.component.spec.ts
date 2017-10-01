import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTratamientoComponent } from './editar-tratamiento.component';

describe('EditarTratamientoComponent', () => {
  let component: EditarTratamientoComponent;
  let fixture: ComponentFixture<EditarTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
