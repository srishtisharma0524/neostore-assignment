import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { InnerHeaderComponent } from './components/inner-header/inner-header.component';

 
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InnerHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent,FooterComponent,InnerHeaderComponent]
})
export class CoreModule { }
