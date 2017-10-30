import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlanTratamientoComponent } from './editar-plan-tratamiento.component';

describe('EditarPlanTratamientoComponent', () => {
  let component: EditarPlanTratamientoComponent;
  let fixture: ComponentFixture<EditarPlanTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPlanTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPlanTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
