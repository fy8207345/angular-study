import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './login/auth.service';
import { ProductService } from './product/product.service';
import { ProductAddComponent } from './product/product-add.component';
import { ProductEditComponent } from './product/product-edit.component';
import { ProductViewComponent } from './product/product-view.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ContactComponent,ProductComponent,LoginComponent,
    ProductAddComponent, ProductEditComponent, ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthGuardService,AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
