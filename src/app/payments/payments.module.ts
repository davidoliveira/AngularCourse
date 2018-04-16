import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PaymentsRoutingModule } from './payments-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { PaymentsService } from './_shared/payments.service';
import { SharedModule } from '../_shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../contacts/_shared/contacts.service';
import { PaymentsControlService } from './_shared/payments-control.service';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule
  ],
  declarations: [IndexComponent, DetailComponent],
  providers: [PaymentsService, ContactsService, PaymentsControlService]
})
export class PaymentsModule { }
