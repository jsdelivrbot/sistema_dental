import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTratamientoComponent } from './crear-tratamiento.component';

describe('CrearTratamientoComponent', () => {
  let component: CrearTratamientoComponent;
  let fixture: ComponentFixture<CrearTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
