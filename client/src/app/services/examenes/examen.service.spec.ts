import { TestBed, inject } from '@angular/core/testing';

import { ExamenService } from './examen.service';

describe('ExamenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamenService]
    });
  });

  it('should be created', inject([ExamenService], (service: ExamenService) => {
    expect(service).toBeTruthy();
  }));
});
