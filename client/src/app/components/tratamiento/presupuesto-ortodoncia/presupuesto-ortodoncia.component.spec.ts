import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoOrtodonciaComponent } from './presupuesto-ortodoncia.component';

describe('PresupuestoOrtodonciaComponent', () => {
  let component: PresupuestoOrtodonciaComponent;
  let fixture: ComponentFixture<PresupuestoOrtodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoOrtodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoOrtodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
