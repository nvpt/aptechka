import { TestBed } from '@angular/core/testing';

import { TargetGroupsService } from './target-groups.service';

describe('TargetGroupService', () => {
  let service: TargetGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
