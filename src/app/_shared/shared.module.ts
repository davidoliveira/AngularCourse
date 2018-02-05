import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account/account.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [AccountService]
})
export class SharedModule { }
