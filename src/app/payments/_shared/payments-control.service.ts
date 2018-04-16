import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PaymentsService } from './payments.service';

@Injectable()
export class PaymentsControlService {

  constructor(
    private paymentsService: PaymentsService
  ) { }

  // Observable string sources
  private paymentDeletedSource = new Subject<Payment>();

  // Observable string streams
  paymentDeleted$ = this.paymentDeletedSource.asObservable();

  // Service message commands
  deletePayment(payment: Payment) {
    //TODO remove through API
    this.paymentDeletedSource.next(payment);
  }
}
