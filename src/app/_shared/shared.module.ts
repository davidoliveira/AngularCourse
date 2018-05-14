import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account/account.service';
import { FirstnameLastnamePipe } from './ui/firstname-lastname.pipe';
import { DecimalInputValidatorDirective } from './ui/decimal-input-validator.directive';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FirstnameLastnamePipe,
    DecimalInputValidatorDirective,
    FooterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    FirstnameLastnamePipe,
    DecimalInputValidatorDirective,
    FooterComponent
  ],
  providers: [AccountService]
})
export class SharedModule { }
