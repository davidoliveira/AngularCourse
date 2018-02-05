import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserLogin } from '../_shared/account/user-login';
import { IUserToken } from '../_shared/account/user-token';

import { AccountService } from '../_shared/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model = new UserLogin(false);
  public displayErrorMsg = false;

  constructor(
      private accountService: AccountService
    , private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.accountService.signIn(this.model).subscribe((response: IUserToken) => {
      this.router.navigate(['payments']);
    }, ((error: any) => {
      this.displayErrorMsg = true;
    }));
  }
}
