import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreModule } from 'src/app/modules/core/core.module';
import { CommonSectionsModule } from 'src/app/modules/feature/common-sections/common-sections.module';
import { FormComponentModule } from '../../form-component/form-component.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { CheckoutProcessRoutingModule } from './checkout-process-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    CoreModule,
    CommonSectionsModule,
    FormComponentModule,
    MaterialModule,
    SharedModule,
    CheckoutProcessRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutProcessModule { }
