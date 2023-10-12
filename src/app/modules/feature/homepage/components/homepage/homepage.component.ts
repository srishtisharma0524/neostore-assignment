import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  title = 'ng-swiper-demo';
  showIcon: boolean = false;
  stars: any[] = [1, 2, 3, 4, 5];
  selectedValue: any = 4;
  

  constructor(private router: Router) { 
    console.log(localStorage.getItem('userToken'));
    if(localStorage.getItem('userToken') != 'LoginSuccess'){
      this.router.navigate(['auth/login']);

    }
  }

  ngOnInit(): void {
    AOS.init();
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();
  }
  date: any;
  now: any;
  targetDate: any = new Date(2023, 8, 4);
  targetTime: any = this.targetDate.getTime();
  difference: number = 0;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference))
        : (this.days.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }

  slideData = [
    {
      imgUrl: "../../../../../assets/images/slide-1.jpg",
      title: "Furniture 2022",
      subtext: "new arrivals",
      subTitle: "spring collection"
    }, {
      imgUrl: "../../../../../assets/images/slide-1.jpg",
      title: "Furniture 2022",
      subtext: "new arrivals",
      subTitle: "spring collection"
    }, {
      imgUrl: "../../../../../assets/images/slide-1.jpg",
      title: "Furniture 2022",
      subtext: "new arrivals",
      subTitle: "spring collection"
    }, {
      imgUrl: "../../../../../assets/images/slide-1.jpg",
      title: "Furniture 2022",
      subtext: "new arrivals",
      subTitle: "spring collection"
    }
  ]

  config: SwiperOptions = {
    /*pagination: { el: '.swiper-pagination', clickable: true },*/
    pagination: false,
    autoHeight: false,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  department = [
      {
        icon: "icon-star",
        title: "Popular"
      },
      {
        icon: "icon-chair",
        title: "Chair"
      },
      {
        icon: "icon-table",
        title: "Table"
      },
      {
        icon: "icon-sofa",
        title: "Sofa"
      },
      {
        icon: "icon-cupboard",
        title: "Cupboard",
        showIcon: true
      },
      {
        icon: "icon-lamp",
        title: "Lamp"
      },
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

  countStar(star:any) {
      this.selectedValue = star;
      console.log('Value of star', star);
    }

  offering = [
      {
        imgUrl: "../../../../../assets/images/offer-img.png",
        title: "White Wooden Chair",
        price: "1200.00",
        value: "40",
        number: "289",
        star: 2
      },
      {
        imgUrl: "../../../../../assets/images/chair2.png",
        title: "White Wooden Chair",
        price: "1200.00",
        value: "40",
        number: "389"
      },
      {
        imgUrl: "../../../../../assets/images/chair3.png",
        title: "White Wooden Chair",
        price: "1200.00",
        value: "40",
        number: "189"
      },
      
  ]

  images = [
      {
        imgUrl: "../../../../../assets/images/img-1.jpg",
        title: "Bedding Sets",
        subText: "Floral Tales Collection",
      },
      {
        imgUrl: "../../../../../assets/images/img-2.jpg",
        title: "Soleil Dining Chair",
        subText: "lightweight chair",
      },
      {
        imgUrl: "../../../../../assets/images/img-3.jpg",
        title: "Living Sets",
        subText: "Easy-to-match shade of beige.",
      },
      {
        imgUrl: "../../../../../assets/images/img-4.jpg",
        title: "Outdoor Sets",
        subText: "Simplest design solutions",
      },
      
  ]

  budget = [
      {
        imgUrl: "../../../../../assets/images/b-1.jpg",
        title: "Sofas under",
        price: "12000.00",
      },
      {
        imgUrl: "../../../../../assets/images/b-2.jpg",
        title: "Sofas under",
        price: "12000.00",
      },
      {
        imgUrl: "../../../../../assets/images/b-3.jpg",
        title: "Sofas under",
        price: "12000.00",
      },
      
  ]

  blogs = [
      {
        imgUrl: "../../../../../assets/images/blog-1.jpg",
        title: "Perfect Bedroom Corner Chair",
        subtext: "Bedroom CHAIR",
        date: "28",
        month: "nov",
        text: "An accent chair is a great focal point, adds contrast, and complements the room’s decor."
      },
      {
        imgUrl: "../../../../../assets/images/blog-2.jpg",
        title: "A Beautiful Sunday Morning",
        subtext: "FURNITURE",
        date: "28",
        month: "nov",
        text: "Color sets the tone for any space and dramatically impacts the room’s atmosphere."
      },
      {
        imgUrl: "../../../../../assets/images/blog-3.jpg",
        title: "Maximalism Design Style",
        subtext: "DINING CHAIR",
        date: "28",
        month: "nov",
        text: "A maximalist space is interesting to look at. Contrast and color are everything."
      },
      
  ]

  sliderData = [
    {
      imgUrl: "../../../../../assets/images/slider-3.jpg"
    }, 
    {
      imgUrl: "../../../../../assets/images/slider-2.jpg"
    }, 
    {
      imgUrl: "../../../../../assets/images/slider-3.jpg"
    }, 
    {
      imgUrl: "../../../../../assets/images/slider-4.jpg"
    }, 
    {
      imgUrl: "../../../../../assets/images/slider-5.jpg"
    }, 
    {
      imgUrl: "../../../../../assets/images/slider-4.jpg"
    }
  ]

  configs: SwiperOptions = {
    /*pagination: { el: '.swiper-pagination', clickable: true },*/
    pagination: false,
    autoHeight: false,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    centeredSlides: true,
    breakpoints: {
      1024: {
        slidesPerView: 6
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  
  imageObject: Array<object> = [{
      image: '../../../../../assets/images/slider-3.jpg',
      thumbImage: '../../../../../assets/images/slider-3.jpg',
  }, {
      image: '../../../../../assets/images/slider-2.jpg',
      thumbImage: '../../../../../assets/images/slider-2.jpg'
  }, {
      image: '../../../../../assets/images/slider-3.jpg',
      thumbImage: '../../../../../assets/images/slider-3.jpg'
  },{
      image: '../../../../../assets/images/slider-4.jpg',
      thumbImage: '../../../../../assets/images/slider-4.jpg'
  }, {
      image: '../../../../../assets/images/slider-5.jpg',
      thumbImage: '../../../../../assets/images/slider-5.jpg'
  }, {
      image: '../../../../../assets/images/slider-4.jpg',
      thumbImage: '../../../../../assets/images/slider-4.jpg'
  },
  {
      image: '../../../../../assets/images/slider-3.jpg',
      thumbImage: '../../../../../assets/images/slider-3.jpg'
  }
  ];
  

}
