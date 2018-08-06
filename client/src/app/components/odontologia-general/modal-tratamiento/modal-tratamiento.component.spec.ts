import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTratamientoComponent } from './modal-tratamiento.component';

describe('ModalTratamientoComponent', () => {
  let component: ModalTratamientoComponent;
  let fixture: ComponentFixture<ModalTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
