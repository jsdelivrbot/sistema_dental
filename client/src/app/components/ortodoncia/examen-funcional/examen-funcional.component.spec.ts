import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenFuncionalComponent } from './examen-funcional.component';

describe('ExamenFuncionalComponent', () => {
  let component: ExamenFuncionalComponent;
  let fixture: ComponentFixture<ExamenFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
