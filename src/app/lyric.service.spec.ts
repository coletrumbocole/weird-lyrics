import { TestBed, inject } from '@angular/core/testing';

import { LyricServiceService } from './lyric-service.service';

describe('LyricServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyricServiceService]
    });
  });

  it('should be created', inject([LyricServiceService], (service: LyricServiceService) => {
    expect(service).toBeTruthy();
  }));
});
