import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise136Component } from './exercise136/exercise136.component';
import { TopBarComponent } from './exercise138/top-bar/top-bar.component';
import { ProductListComponent } from './exercise138/product-list/product-list.component';
import { ProductItemComponent } from './exercise138/product-item/product-item.component';
import { CartComponent } from './exercise138/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise136Component,
    TopBarComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
