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
  public paymentSelected: Payment = null;

  constructor(
      private accountService: AccountService
    , private paymentsService: PaymentsService
  ) { }

  ngOnInit() {
    const subscriber = this.accountService.getUserLoggedIn().subscribe((user: User) => {
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
    if (this.paymentSelected != null) {
      this.offHighlight(this.paymentSelected.id);
    }

    this.paymentSelected = payment;
  }

  onHighlight(idPayment: number) {
    const el: HTMLElement = document.getElementById('payment-description-' + idPayment) as HTMLElement;
    el.style.fontWeight = 'bold';
  }

  offHighlight(idPayment: number) {
    const el: HTMLElement = document.getElementById('payment-description-' + idPayment) as HTMLElement;
    el.style.fontWeight = '';
  }

  remove(): void {

  }
}
