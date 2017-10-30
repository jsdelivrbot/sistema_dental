import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTratamientoComponent } from './plan-tratamiento.component';

describe('PlanTratamientoComponent', () => {
  let component: PlanTratamientoComponent;
  let fixture: ComponentFixture<PlanTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
