import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
  path: 'product-list',
  component: ProductsPageComponent
  },
  {
  path: 'product-detail',
  component: ProductsDetailComponent
  },
  {
  path: 'cart',
  component: CartComponent
  },
  {
  path: 'wishlist',
  component: WishlistComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
