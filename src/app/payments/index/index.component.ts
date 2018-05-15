import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../_shared/payments.service';
import { AccountService } from '../../_shared/account/account.service';
import { PaymentsControlService } from '../_shared/payments-control.service';
import { IUser } from '../../_shared/account/models/user';

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
    , private paymentsControlService: PaymentsControlService
  ) { }

  ngOnInit() {
    const subscriber = this.accountService.getUserLoggedIn().subscribe((user: IUser) => {
      this.getAllPayments(user.condominiumId);

      this.paymentsService.countPayments(user.condominiumId).subscribe((total: number) => {
        this.paymentsCount = total;
      });

      this.paymentsControlService.paymentDeleted$.subscribe(payment => {
          console.log('payment deleted - index');

          const index = this.payments.indexOf(payment);
          if (index > -1) {
            this.payments.splice(index, 1);
        }
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

  remove(payment: Payment): void {
    this.paymentsControlService.deletePayment(payment);
  }
}
