import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from 'src/app/modules/core/core.module';
import { AuthenticationModule } from 'src/app/modules/feature/authentication/authentication.module';
import { CommonSectionsModule } from 'src/app/modules/feature/common-sections/common-sections.module';
import { ProductsModule } from 'src/app/modules/feature/products/products.module';
import { HomepageModule } from 'src/app/modules/feature/homepage/homepage.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AuthenticationModule,
    HomepageModule,
    FormsModule,
    MaterialModule,
    CommonSectionsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
