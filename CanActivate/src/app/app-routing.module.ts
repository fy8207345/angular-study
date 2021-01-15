import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product/product-add.component';
import { ProductEditComponent } from './product/product-edit.component';
import { ProductViewComponent } from './product/product-view.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent, canActivate : [AuthGuardService] ,
      canActivateChild : [AuthGuardService],
      children: [
      {  path: 'view/:id', component: ProductViewComponent  },
      {  path: 'edit/:id', component: ProductEditComponent  },
      {  path: 'add', component: ProductAddComponent }
      ]  
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
