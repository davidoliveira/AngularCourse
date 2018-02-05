import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../_shared/account/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model = new UserLogin(false);

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
   console.log(JSON.stringify(this.model));
  }
}
