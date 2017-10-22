import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionesDentalesComponent } from './relaciones-dentales.component';

describe('RelacionesDentalesComponent', () => {
  let component: RelacionesDentalesComponent;
  let fixture: ComponentFixture<RelacionesDentalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionesDentalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionesDentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
