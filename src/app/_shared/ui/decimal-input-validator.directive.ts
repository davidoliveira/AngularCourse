import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[decimalInputValidator]'
})
export class DecimalInputValidatorDirective {

  constructor(
    private el: ElementRef,
    private model: NgModel,
  ) { }

  @HostListener('keypress')
  onKeyup() {
    const inputValue = (this.el.nativeElement as HTMLInputElement).value;
    console.log(inputValue);

    if (isNaN(inputValue as any)) {
      this.el.nativeElement.style.borderColor = 'red';
      //this.model.valueAccessor.writeValue(0);
    } else {
      this.el.nativeElement.style.borderColor = '#ced4da';
    }
  }
}
