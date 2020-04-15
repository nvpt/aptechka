import { TestBed } from '@angular/core/testing';

import { ImpactTypeService } from './impact-type.service';

describe('ImpactTypeService', () => {
  let service: ImpactTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
