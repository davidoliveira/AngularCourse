import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../_shared/account/account.service';
import { IUserCreated } from '../../_shared/account/models/user-created';
import { UserCreate } from '../../_shared/account/models/user-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public model = new UserCreate(null, null, null);
  public isAgreed = false;
  public isCreatedWithSuccess = false;
  public errorMsg: string = null;

  constructor(
    private accountService: AccountService
  , private router: Router) { }

  ngOnInit() {
    if (this.accountService.isAuthenticated()) {
      this.router.navigate(['payments']);
    }
  }

  onSubmit($event: any) {
    if (this.isAgreed) {
      this.errorMsg = null;
      this.accountService.create(this.model).subscribe((response: IUserCreated) => {
        this.isCreatedWithSuccess = true;
      }, ((error: any) => {
        this.errorMsg = 'Infelizmente não foi possível criar uma conta, tente mais tarde.';
      }));
    } else {
      this.errorMsg = 'Tem de concordar com os Termos & Condições!';
    }
  }
}
