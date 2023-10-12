import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
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

  constructor(private router: Router) { }

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
        url: "/app/wishlist",
        title: "Favourites",
        Class: "active"
      }
  ]

  toggleSelect = "grid";
  public grid: boolean = true;

  onValChange(value: any) {
    this.toggleSelect = "list";
    this.grid = !this.grid;
  }

  products = [
      {
        imgURL: "../../../../../assets/images/wishlist-1.jpg",
        title: "Armen Living Summer Chair",
        item: "MB494",
        size: "40X60",
        price: "4,499",
        disPrice: "3,825"
      },
      {
        imgURL: "../../../../../assets/images/wishlist-1.jpg",
        title: "Armen Living Summer Chair",
        item: "MB494",
        size: "40X60",
        price: "4,499",
        disPrice: "3,825"
      },
      {
        imgURL: "../../../../../assets/images/wishlist-1.jpg",
        title: "Armen Living Summer Chair",
        item: "MB494",
        size: "40X60",
        price: "4,499",
        disPrice: "3,825"
      },
      {
        imgURL: "../../../../../assets/images/wishlist-1.jpg",
        title: "Armen Living Summer Chair",
        item: "MB494",
        size: "40X60",
        price: "4,499",
        disPrice: "3,825"
      }
  ]

  navigateCart(){
    localStorage.setItem('userToken', '');
    this.router.navigate(['app/cart']);
  }

}
