import { TestBed, inject } from '@angular/core/testing';

import { ProuductGuardService } from './prouduct-guard.service';

describe('ProuductGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProuductGuardService]
    });
  });

  it('should be created', inject([ProuductGuardService], (service: ProuductGuardService) => {
    expect(service).toBeTruthy();
  }));
});
