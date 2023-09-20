import { TestBed } from '@angular/core/testing';

import { DiscoveryApiService } from './discovery-api.service';

describe('DiscoveryApiService', () => {
  let service: DiscoveryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoveryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
