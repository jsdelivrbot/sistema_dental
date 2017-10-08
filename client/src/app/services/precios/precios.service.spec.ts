import { TestBed, inject } from '@angular/core/testing';

import { PreciosService } from './precios.service';

describe('PreciosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreciosService]
    });
  });

  it('should be created', inject([PreciosService], (service: PreciosService) => {
    expect(service).toBeTruthy();
  }));
});
