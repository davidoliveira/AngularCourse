import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { PaymentsService } from './_shared/payments.service';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ],
  declarations: [IndexComponent, DetailComponent],
  providers: [PaymentsService]
})
export class PaymentsModule { }
