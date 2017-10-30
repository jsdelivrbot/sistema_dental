import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProblemasComponent } from './listado-problemas.component';

describe('ListadoProblemasComponent', () => {
  let component: ListadoProblemasComponent;
  let fixture: ComponentFixture<ListadoProblemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoProblemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
