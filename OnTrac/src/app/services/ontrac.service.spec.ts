import { TestBed } from '@angular/core/testing';

import { OntracService } from './ontrac.service';

describe('OntracService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OntracService = TestBed.get(OntracService);
    expect(service).toBeTruthy();
  });
});
