import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenGeneralComponent } from './editar-examen-general.component';

describe('EditarExamenGeneralComponent', () => {
  let component: EditarExamenGeneralComponent;
  let fixture: ComponentFixture<EditarExamenGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarExamenGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExamenGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
