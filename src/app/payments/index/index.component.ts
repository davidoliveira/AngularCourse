import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../_shared/payments.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private paymentsService: PaymentsService
  ) { }

  ngOnInit() {

  }

  getPayment():void {
    this.paymentsService.getPaymentById(1).subscribe((payment: any) => {

    });
  }
}
