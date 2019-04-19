import { TestBed } from '@angular/core/testing';

import { CalcTotalService } from './calc-total.service';

describe('CalcTotalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcTotalService = TestBed.get(CalcTotalService);
    expect(service).toBeTruthy();
  });
});
