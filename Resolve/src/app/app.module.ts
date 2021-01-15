import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductListResolveService } from './product-list-resolve';
import { Product2Component } from './product.component';
import { Product1Component } from './product1.component';
import { Product1DetailComponent } from './product1-detail.component';
import { Product2DetailComponent } from './product2-detail.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ProductResolverService } from './product-resolver.service';
import { FormsModule } from '@angular/forms';
import { StaticComponent } from './static-data.component';
import { DynamicComponent } from './dynamic-data.component';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Product2Component,
    Product1Component,
    Product1DetailComponent,
    Product2DetailComponent,
    HomeComponent,
    ContactComponent,
    StaticComponent, 
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, ProductListResolveService, ProductResolverService, JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
