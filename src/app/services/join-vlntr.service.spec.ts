import { TestBed } from '@angular/core/testing';

import { JoinVlntrService } from './join-vlntr.service';

describe('JoinVlntrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinVlntrService = TestBed.get(JoinVlntrService);
    expect(service).toBeTruthy();
  });
});
