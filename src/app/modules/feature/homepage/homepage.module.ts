import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/modules/core/core.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormComponentModule } from '../../form-component/form-component.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CoreModule,
    NgImageSliderModule,
    NgxUsefulSwiperModule,
    FormComponentModule,
    MaterialModule
  ]
})
export class HomepageModule { }
 