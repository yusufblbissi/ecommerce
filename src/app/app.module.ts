import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { ProductServicesService } from './product-services.service';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    SingleProductComponent,
    CartProductComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
  ],
  providers: [ProductServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
