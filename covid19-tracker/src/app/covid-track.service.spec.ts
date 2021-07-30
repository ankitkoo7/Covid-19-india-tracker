import { TestBed } from '@angular/core/testing';

import { CovidTrackService } from './covid-track.service';

describe('CovidTrackService', () => {
  let service: CovidTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
