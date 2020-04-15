import { TestBed } from '@angular/core/testing';

import { ImpactTypesService } from './impact-types.service';

describe('ImpactTypeService', () => {
  let service: ImpactTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
