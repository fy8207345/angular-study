import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { DynamicComponent } from './dynamic-data.component';
import { HomeComponent } from './home.component';
import { ProductListResolveService } from './product-list-resolve';
import { ProductResolverService } from './product-resolver.service';
import { Product2Component } from './product.component';
import { Product1DetailComponent } from './product1-detail.component';
import { Product1Component } from './product1.component';
import { Product2DetailComponent } from './product2-detail.component';
import { StaticComponent } from './static-data.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'static', component: StaticComponent, data :{ id:'1', name:"Angular"}},
  { path: 'dynamic', component: DynamicComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product1', component: Product1Component },
  { path: 'product2', component: Product2Component, resolve: {products: ProductListResolveService}  },
  { path: 'product1/:id', component: Product1DetailComponent },
  { path: 'product2/:id', component: Product2DetailComponent, resolve:{product:ProductResolverService} },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
