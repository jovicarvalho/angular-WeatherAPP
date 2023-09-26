import { TestBed } from '@angular/core/testing';

import { MeteorologicalDataServiceService } from './meteorological-data-service.service';

describe('MeteorologicalDataServiceService', () => {
  let service: MeteorologicalDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteorologicalDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
