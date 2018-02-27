import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { PaymentsService } from './_shared/payments.service';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ],
  declarations: [IndexComponent, DetailComponent],
  providers: [PaymentsService]
})
export class PaymentsModule { }
