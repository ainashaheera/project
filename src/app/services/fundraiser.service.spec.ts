import { TestBed } from '@angular/core/testing';

import { FundraiserService } from './fundraiser.service';

describe('FundraiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundraiserService = TestBed.get(FundraiserService);
    expect(service).toBeTruthy();
  });
});
