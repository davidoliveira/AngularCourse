import { Component, OnInit } from '@angular/core';
import { UserCreate } from '../../_shared/account/user-create';
import { Router } from '@angular/router';
import { AccountService } from '../../_shared/account/account.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public model = new UserCreate(null, null);

  constructor(
    private accountService: AccountService
  , private router: Router) { }

  ngOnInit() {
    if (this.accountService.isAuthenticated()) {
      this.router.navigate(['payments']);
    }
  }

}
