import { TestBed, inject } from '@angular/core/testing';

import { PaymentsControlService } from './payments-control.service';

describe('PaymentsControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentsControlService]
    });
  });

  it('should be created', inject([PaymentsControlService], (service: PaymentsControlService) => {
    expect(service).toBeTruthy();
  }));
});
