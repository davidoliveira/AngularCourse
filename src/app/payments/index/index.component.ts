import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../_shared/payments.service';
import { AccountService } from '../../_shared/account/account.service';

@Component({
  selector: 'app-payments-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public payments: Payment[];
  public paymentsCount: number;
  public paymentSelected: Payment;

  constructor(
      private accountService: AccountService
    , private paymentsService: PaymentsService
  ) { }

  ngOnInit() {
    let subscriber = this.accountService.getUserLoggedIn().subscribe((user: User) => {
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

  selectPayment(payment: Payment): void {
    this.paymentSelected = payment;
    //console.log(this.paymentSelected);
  }

  onHighlight(idPayment: number) {
    console.log(idPayment);
    const el: HTMLElement = document.getElementById('payment-' + idPayment) as HTMLElement;
    if(el.style.fontWeight === 'bold') {
      el.style.fontWeight = '';
    } else {
      el.style.fontWeight = 'bold';
    }
  }
}
