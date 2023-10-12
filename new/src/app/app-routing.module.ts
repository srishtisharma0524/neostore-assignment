import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/feature/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/feature/homepage/homepage.module').then(
        (m) => m.HomepageModule
      )
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/feature/products/products.module').then(
        (m) => m.ProductsModule
      )
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/feature/checkout-process/checkout-process.module').then(
        (m) => m.CheckoutProcessModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
