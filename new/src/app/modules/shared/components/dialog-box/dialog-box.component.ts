import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  quantityTypeList: any[] = [];
  setQuantityType() {
    this.quantityTypeList = [
      {
        value: 'Qty: 2',
        label: 'Qty: 2',
      },
      {
        value: 'Qty: 3',
        label: 'Qty: 3',
      },
    ];
  }
  constructor() { }

  ngOnInit(): void {
    this.setQuantityType();
  }

  productTitle: any = "Armen Living Summer Chair";
  item: any = "MB494";
  size: any = "40X60 cm";
  price: any = "4,499";
  disPrice: any = "3,825";

}
