import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { FormComponentModule } from 'src/app/modules/form-component/form-component.module';

@NgModule({
  declarations: [
    PaginationComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormComponentModule
  ],
  exports: [
    PaginationComponent,
    DialogBoxComponent
  ]
})
export class SharedModule { }
