import { TestBed } from '@angular/core/testing';

import { LocateMeService } from './locate-me.service';

describe('LocateMeService', () => {
  let service: LocateMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocateMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
