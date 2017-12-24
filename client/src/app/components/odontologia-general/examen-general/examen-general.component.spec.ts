import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenGeneralComponent } from './examen-general.component';

describe('ExamenGeneralComponent', () => {
  let component: ExamenGeneralComponent;
  let fixture: ComponentFixture<ExamenGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
