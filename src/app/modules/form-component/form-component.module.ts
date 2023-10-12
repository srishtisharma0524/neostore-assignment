import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';


@NgModule({
  declarations: [
    CustomInputComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomInputComponent,
    CustomButtonComponent
  ]
})
export class FormComponentModule { }
