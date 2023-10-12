import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogBoxComponent } from '../cart-dialog-box/cart-dialog-box.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  visible: boolean = true;
  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.setQuantityType();
  }

  breadcrumbs = [
      {
        url: "/app/home",
        title: "Home",
        Class: ""
      },
      {
        url: "/app/cart",
        title: "Cart",
        Class: "active"
      }
  ]

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

  trending = [
      {
        imgUrl: "../../../../../assets/images/t-1.jpg",
        title: "White Wooden Chair",
        price: "1200.00"
      },
      {
        imgUrl: "../../../../../assets/images/t-2.jpg",
        title: "Modern Sofa Couch with Wood",
        price: "1200.00"
      },
      {
        imgUrl: "../../../../../assets/images/t-3.jpg",
        title: "Armen Living Jaguar Chair",
        price: "1200.00"
      },
      {
        imgUrl: "../../../../../assets/images/t-4.jpg",
        title: "Modern clock",
        price: "1200.00"
      },
      {
        imgUrl: "../../../../../assets/images/t-5.jpg",
        title: "Globe Desk Lamp",
        price: "1200.00"
      },
  ]

  cardImg: any = "../../../../../assets/images/cart-img.jpg";
  cardTitle: any = "Minimal Stand";
  price: any = "4,499";
  disPrice: any = "3,825";
  saving: any = "674";
  savePercentage: any = "20%";
  totalPrice: any = "4,650";
  shipping: any = "0.00";

  removeCart() {
    const dialogRef = this._dialog.open(CartDialogBoxComponent, {
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
      width: '31.8%',
      position: { top: '13%' },
      panelClass: 'cart-dialog-box',
      /*data: {
        title: 'Create New Relation',
        productDetails: this.productDetails,
        variantSKU: this.variantSKU,
        relationId: 'NEW', 
        createRelation: true,
        skuId:this.skuId,
        relationName:'',
        addNewUOM:false
      },*/
    });
  }
}
