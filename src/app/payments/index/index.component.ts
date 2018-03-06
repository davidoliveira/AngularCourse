import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../_shared/payments.service';
import { AccountService } from '../../_shared/account/account.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public payments: Payment[];
  public paymentsCount: number;

  constructor(
      private accountService: AccountService
    , private paymentsService: PaymentsService
  ) { }

  ngOnInit() {
    this.accountService.getUserLoggedIn().subscribe((user: User) => {
      this.getAllPayments(user.condominiumId);

      this.paymentsService.countPayments(user.condominiumId).subscribe((total: number) => {
        this.paymentsCount = total;
      });
    });
  }

  getAllPayments(condominiumId: number): void {
    this.paymentsService.getAllPayments(condominiumId, 1, 10).subscribe((payments: Payment[]) => {
      this.payments = payments;
    });
  }
}
