import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonBannerComponent } from './common-banner/common-banner.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { FormComponentModule } from '../../form-component/form-component.module';

@NgModule({
  declarations: [
    CommonBannerComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormComponentModule
  ],
  exports: [
    CommonBannerComponent,
    OrderSummaryComponent
  ]
})
export class CommonSectionsModule { }
