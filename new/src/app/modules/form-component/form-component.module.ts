import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomInputComponent,
    CustomButtonComponent,
    CustomSelectComponent,
  ]
})
export class FormComponentModule { }
