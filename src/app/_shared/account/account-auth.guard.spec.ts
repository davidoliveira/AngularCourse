import { TestBed, async, inject } from '@angular/core/testing';

import { AccountAuthGuard } from './account-auth.guard';

describe('AccountAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountAuthGuard]
    });
  });

  it('should ...', inject([AccountAuthGuard], (guard: AccountAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
