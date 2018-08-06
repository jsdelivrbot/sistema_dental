import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExamenesComponent } from './lista-examenes.component';

describe('ListaExamenesComponent', () => {
  let component: ListaExamenesComponent;
  let fixture: ComponentFixture<ListaExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
