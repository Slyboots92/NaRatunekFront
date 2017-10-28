import { TestBed, inject } from '@angular/core/testing';

import { DonorsServiceService } from './donors-service.service';

describe('DonorsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonorsServiceService]
    });
  });

  it('should be created', inject([DonorsServiceService], (service: DonorsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
