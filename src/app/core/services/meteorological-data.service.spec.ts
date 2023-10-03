import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MeteorologicalDataService } from './meteorological-data.service';

describe('MeteorologicalDataServiceService', () => {
  let service: MeteorologicalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MeteorologicalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
