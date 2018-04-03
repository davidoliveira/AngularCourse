import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { ContactsService } from './_shared/contacts.service';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    IndexComponent,
    DetailComponent
  ],
  providers: [ContactsService]
})
export class ContactsModule { }
