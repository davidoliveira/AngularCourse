import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, Injectable } from '@angular/core';
import { AccountService } from '../../_shared/account/account.service';
import { PaymentsService } from '../_shared/payments.service';
import { ContactsService } from '../../contacts/_shared/contacts.service';
import { PaymentsControlService } from '../_shared/payments-control.service';
import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateNativeAdapter } from "../../_shared/ui/NgbDateNativeAdapter";

@Component({
  selector: 'app-payments-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers:[]
})

export class DetailComponent implements OnInit, OnChanges {
  @Input('payment') payment: Payment = null;
  @Output() onHighlight = new EventEmitter<number>();

  private isHighlight: boolean;

  constructor(
    private accountService: AccountService
  , private paymentsService: PaymentsService
  , private contactsService: ContactsService
  , private paymentsControlService: PaymentsControlService
) { }

  ngOnInit() {
    this.paymentsControlService.paymentDeleted$.subscribe(payment => {
      this.payment = null;
    });
  }

  remove(): void {
    this.paymentsControlService.deletePayment(this.payment);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.payment)
      return;
    if(this.payment != null) {
      this.onHighlight.emit(this.payment.id);
    }
  }

  save(): void {
    this.paymentsService.savePayment(this.payment).subscribe((response: any) => {
      console.log(response);
    });
  }

}

