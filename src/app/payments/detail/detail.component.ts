import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, Injectable } from '@angular/core';
import { AccountService } from '../../_shared/account/account.service';
import { PaymentsService } from '../_shared/payments.service';
import { ContactsService } from '../../contacts/_shared/contacts.service';

@Component({
  selector: 'app-payments-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: []
})
export class DetailComponent implements OnInit, OnChanges {
  @Input('payment') payment: Payment = null;
  @Output() onHighlight = new EventEmitter<number>();

  private isHighlight: boolean;

  constructor(
    private accountService: AccountService
  , private paymentsService: PaymentsService
  , private contactsService: ContactsService
) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('selected payment has changed');
    if(this.payment != null) {
      this.onHighlight.emit(this.payment.id);
    }
  }

  save(): void {

  }

  remove(): void {

  }
}

