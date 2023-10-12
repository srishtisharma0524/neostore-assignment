import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {


   
  breadcrumbs = [
      {
        url: "/app/home",
        title: "Home",
        Class: ""
      },
      {
        url: "/app/product-list",
        title: "Armen Living Summer Chair",
        Class: "active"
      }
  ]
  constructor(private _dialog: MatDialog) { }

  createNewRelation() {
    const dialogRef = this._dialog.open(DialogBoxComponent, {
      closeOnNavigation: true,
      hasBackdrop: true,
      disableClose: true,
      width: '70%',
      position: { top: '7%' },
      panelClass: 'dialog-box',
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

  /*thumbnailSwiper: any = null;*/

  mainSwiperOptions: SwiperOptions = {
    slidesPerView: 1, 
    /*thumbs: {
      swiper: this.thumbnailSwiper 
    },*/
    autoHeight: true,
    allowTouchMove: true,
    /*autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },*/
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  thumbnailSwiperOptions: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    loop: true
  };

  /*setThumbnailSwiper(swiper: any) {
    this.thumbnailSwiper = swiper;
  }*/

  ngOnInit(): void {
  }

  slides = [
    { id: 1, image: '../../../../../assets/images/slide-1.jpg' },
    { id: 2, image: '../../../../../assets/images/banner-img.jpg' },
    // Add more images as needed
  ];

  selectImage(image: string) {
    const index = this.slides.findIndex(slide => slide.image === image);
    this.mainSwiperOptions['initialSlide'] = index;
    console.log(image);
  }
thumbnailImages: string[] = [
    '../../../../../assets/images/slide-1.jpg',
    '../../../../../assets/images/banner-img.jpg',
    '../../../../../assets/images/slide-1.jpg',
    // Add more thumbnail image URLs as needed
  ];

mainImages: string[] = [
    '../../../../../assets/images/slide-1.jpg',
    '../../../../../assets/images/banner-img.jpg',
    '../../../../../assets/images/slide-1.jpg',
    // Add more main image URLs as needed
  ];

  productImg: any = "../../../../../assets/images/product-detail-img.jpg";
  productTitle: any = "Armen Living Summer Chair";
  productPrice: any = "6,450";
  stars: any[] = [1, 2, 3, 4, 5];
  selectedValue: any = 4;
  /*countStar(star:any) {
      this.selectedValue = star;
      console.log('Value of star', star);
    }*/
  smallDescription: any = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  checked = true;
  colors = [
      {
        value: "color1",
        checked: false,
        imgUrl: "../../../../../assets/images/color-1.jpg"
      },
      {
        value: "color2",
        checked: false,
        imgUrl: "../../../../../assets/images/color-2.jpg"
      },
      {
        value: "color3",
        checked: true,
        imgUrl: "../../../../../assets/images/product-detail-img.jpg"
      },
      {
        value: "color4",
        checked: false,
        imgUrl: "../../../../../assets/images/color-3.jpg"
      }
  ]

  counter = 1;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  tabs = [
  {
    label: "DESCRIPTION",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Pharetra diam sit amet nisl suscipit adipiscing Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nullam eget felis eget nunc lobortis mattis.Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula ipsum."
  },
  {
    label: "ADDITIONAL INFORMATION",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Pharetra diam sit amet nisl suscipit adipiscing Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nullam eget felis eget nunc lobortis mattis.Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula ipsum."
  },
  {
    label: "REVIEWS (5)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Pharetra diam sit amet nisl suscipit adipiscing Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nullam eget felis eget nunc lobortis mattis.Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula ipsum."
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
