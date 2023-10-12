import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/*import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';*/
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  saving: any = "674";
  savePercentage: any = "20%";
  totalPrice: any = "4,650";
  shipping: any = "0.00";
  visible: boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public active: boolean = false;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   }

  ngOnInit(): void {

  }

  breadcrumbs = [
      {
        url: "/app/home",
        title: "Home",
        Class: ""
      },
      {
        url: "/app/checkout",
        title: "Checkout",
        Class: "active"
      }
  ]

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

}
