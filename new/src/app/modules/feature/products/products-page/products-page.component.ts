/*import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';*/
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
/*import { MatDialog } from '@angular/material/dialog';*/
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  /*@ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;*/
  addressTypeList: any[] = [];
  filteredProduct: any;
  checked = false;
  stars: any[] = [1, 2, 3, 4, 5];
  breadcrumbs = [
      {
        url: "/app/home",
        title: "Home",
        Class: ""
      },
      {
        url: "/app/product-list",
        title: "Furniture List",
        Class: "active"
      }
  ]


  setAddressType() {
    this.addressTypeList = [
      {
        value: 'shipping',
        label: 'Shipping',
      },
      {
        value: 'billing',
        label: 'Billing',
      },
    ];
  }

  toggleSelect = "grid";
  public grid: boolean = true;

  onValChange(value: any) {
    this.toggleSelect = "list";
    this.grid = !this.grid;
  }

  gridImg = [
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Ultricies condimentum imperdiet",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 1
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Vitae suspendisse sed",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 2
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Sed at fermentum",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 3
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Sed at fermentum",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 4
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Vitae suspendisse sed",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 5
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Sed at fermentum",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 6
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Sed at fermentum",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 1
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Vitae suspendisse sed",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 2
      },
      {
        imgUrl: "../../../../../assets/images/product-1.jpg",
        title: "Sed at fermentum",
        discountPrice: "26.00",
        originalPrice: "42.00",
        brandId: 3
      }
  ]

  brands = [
      {
        value: "Coaster Furniture",
       
        label: "Coaster Furniture",
        id:1
      },
      {
        value: "Fusion Dot High Fashion",
      
        label: "Fusion Dot High Fashion",
        id: 2
      },
      {
        value: "Unique Furnitture Restor",
      
        label: "Unique Furnitture Restor",
        id: 3
      },
      {
        value: "Dream Furnitture Flipping",
       
        label: "Dream Furnitture Flipping",
        id: 4
      },
      {
        value: "Young Repurposed",
       
        label: "Young Repurposed",
        id: 5
      },
      {
        value: "Green DIY furniture",
       
        label: "Green DIY furniture",
        id: 6
      }
  ]

  offers = [
      {
        value: "20% Cashback",
        checked: false,
        label: "20% Cashback"
      },
      {
        value: "5% Cashback Offer",
        checked: false,
        label: "5% Cashback Offer"
      },
      {
        value: "25% Discount Offer",
        checked: true,
        label: "25% Discount Offer"
      }
  ]

  rate = [
      {
        value: "4star",
        checked: false,
        label: "(2341)"
      },
      {
        value: "3star",
        checked: false,
        label: "(1726)"
      },
      {
        value: "2star",
        checked: true,
        label: "(258)"
      },
      {
        value: "1star",
        checked: false,
        label: "(25)"
      }
  ]

  price = [
      {
        value: "₹0.00 - ₹1500.00",
        checked: false,
        label: "₹0.00 - ₹1500.00"
      },
      {
        value: "₹1500.00 - ₹3500.00",
        checked: false,
        label: "₹1500.00 - ₹3500.00"
      },
      {
        value: "₹3500.00 - ₹5000.00",
        checked: true,
        label: "₹3500.00 - ₹5000.00"
      },
      {
        value: "₹5000.00 +",
        checked: false,
        label: "₹5000.00 +"
      }
  ]

  colors = [
      {
        value: "Blue",
        checked: true,
        label: "Blue",
        Class: "blue"
      },
      {
        value: "Orange",
        checked: false,
        label: "Orange",
        Class: "orange"
      },
      {
        value: "Brown",
        checked: true,
        label: "Brown",
        Class: "brown"
      },
      {
        value: "Green",
        checked: false,
        label: "Green",
        Class: "green"
      },
      {
        value: "Cream",
        checked: false,
        label: "Cream",
        Class: "cream"
      }
  ]

  /*constructor(private router: Router, private _dialog: MatDialog) { */
  constructor(private router: Router) { 

    this.filteredProduct = this.gridImg;


  }

  ngOnInit(): void {
    this.setAddressType();
  }


  filterByBrand(event:MatCheckboxChange,brand:any){

    if(event.checked){


    this.filteredProduct = this.gridImg.filter((x:any) => 
       (x.brandId === brand)
    );

    }else{



      this.filteredProduct = this.gridImg.filter((x:any) => 
         (x.brandId != brand)
      );

    } 
    // this.filteredProduct = this.filteredProduct.filter(this.filteredProduct.brand, brand)

    console.log('brand');
    console.log(brand,event);


  }

  navigateCart(){
    localStorage.setItem('userToken', '');
    this.router.navigate(['app/cart']);
  }

  /*zoom() {
    const dialogRef = this._dialog.open(this.callAPIDialog, {
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
      width: '31.8%',
      position: { top: '13%' },
      panelClass: 'cart-dialog-box',
      
    });
  }*/

}
