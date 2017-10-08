import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosOrtodonciaComponent } from './precios-ortodoncia.component';

describe('PreciosOrtodonciaComponent', () => {
  let component: PreciosOrtodonciaComponent;
  let fixture: ComponentFixture<PreciosOrtodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciosOrtodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosOrtodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
