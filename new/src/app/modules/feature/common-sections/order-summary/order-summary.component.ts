import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Input() saving: any = "674";
  @Input() savePercentage: any = "20%";
  @Input() totalPrice: any = "4,650";
  @Input() shipping: any = "0.00";
  @Input() visible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
