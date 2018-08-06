import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenFacialComponent } from './examen-facial.component';

describe('ExamenFacialComponent', () => {
  let component: ExamenFacialComponent;
  let fixture: ComponentFixture<ExamenFacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenFacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
