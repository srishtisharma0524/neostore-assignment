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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
