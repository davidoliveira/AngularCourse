import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment';

import { AccountService } from '../app/_shared/account/account.service';
import { User } from '../app/_shared/account/models/user';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [AccountService]
    });
    service = TestBed.get(AccountService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should get a user by id', () => {
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    const testData = new User();
    testData.id = 1;

    service.getUserById(1).subscribe((user: User) => {
      expect(user).toEqual(testData);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/users/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
