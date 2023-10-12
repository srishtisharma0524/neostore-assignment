import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreModule } from 'src/app/modules/core/core.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonSectionsModule } from 'src/app/modules/feature/common-sections/common-sections.module';
import { FormComponentModule } from '../../form-component/form-component.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CartComponent } from './cart/cart.component';
import { CartDialogBoxComponent } from './cart-dialog-box/cart-dialog-box.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsDetailComponent,
    CartComponent,
    CartDialogBoxComponent,
    WishlistComponent,
    
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgSelectModule,
    ProductsRoutingModule,
    CommonSectionsModule,
    FormComponentModule,
    MaterialModule,
    SharedModule,
    NgxUsefulSwiperModule
  ]
})
export class ProductsModule { }
