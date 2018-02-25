import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from './account.service';

@Injectable()
export class AccountAuthGuard implements CanActivate {

  constructor(
    public accountService: AccountService
  , public router: Router

  ) {}

  canActivate(
      next: ActivatedRouteSnapshot
    , state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      const expectedRole = next.data.expectedRole; //example if we want to check also role

      if (!this.accountService.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }
}
