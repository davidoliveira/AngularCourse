import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payments-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges {
  @Input('payment') payment: Payment = null;
  @Output() onHighlight = new EventEmitter<number>();

  private isHighlight: boolean;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('selected payment has changed');
  }

  highlight(): void {
    this.onHighlight.emit(this.payment.id);
  }
}
