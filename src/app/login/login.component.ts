import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { UserLogin } from '../_shared/account/models/user-login';
import { IUserToken } from '../_shared/account/models/user-token';

import { AccountService } from '../_shared/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model = new UserLogin(false);
  public displayErrorMsg = false;
  public formLogin: FormGroup;

  constructor(
      private accountService: AccountService
    , private router: Router
    , private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3), hasPunctuation('@', 'atRequired')]],
        password: ['', [Validators.required, Validators.minLength(3)]]
      }),
      rememberMe: [true]
    });

    /*
    this.formLogin = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', Validators.required)
      }),
      rememberMe: new FormControl(true)
    });
    */
  }

  ngOnInit() {
    if (this.accountService.isAuthenticated()) {
      this.router.navigate(['payments']);
    }
  }

  onSubmit($event) {
    // These values are still referenced by our form. If we just copy that reference and modify the data elsewhere,
    // the form will be impacted, as well. This can cause weird side-effects.
    // This is why we need to create a copy of the data. In this example we are using Object.assign for that.
    const result = Object.assign({}, this.formLogin.value);

    const userLogin = new UserLogin(result.rememberMe, result.userData.username, result.userData.password);

    this.accountService.signIn(userLogin).subscribe((response: IUserToken) => {
      this.router.navigate(['payments']);
    }, ((error: any) => {
      this.displayErrorMsg = true;
    }));
  }

  // convenience getter for easy access to form fields
  get f() { return this.formLogin.controls; }
}

export function hasPunctuation(punctuation: string, errorType: string) {
  return (input: FormControl) => {
    return input.value.indexOf(punctuation) >= 0 ?
        null :
        { [errorType]: true };
  };
}
