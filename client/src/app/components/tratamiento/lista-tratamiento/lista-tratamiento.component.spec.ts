import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTratamientoComponent } from './lista-tratamiento.component';

describe('ListaTratamientoComponent', () => {
  let component: ListaTratamientoComponent;
  let fixture: ComponentFixture<ListaTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
