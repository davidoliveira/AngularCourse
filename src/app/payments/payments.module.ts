import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ],
  declarations: [IndexComponent, DetailComponent]
})
export class PaymentsModule { }
