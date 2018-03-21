import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account/account.service';
import { FirstnameLastnamePipe } from './ui/firstname-lastname.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FirstnameLastnamePipe
  ],
  exports: [
    FirstnameLastnamePipe
  ],
  providers: [AccountService]
})
export class SharedModule { }
