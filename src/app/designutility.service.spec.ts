import { TestBed } from '@angular/core/testing';

import { DesignutilityService } from './appServices/designutility.service';

describe('DesignutilityService', () => {
  let service: DesignutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
