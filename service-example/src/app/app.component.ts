import { Component } from '@angular/core';

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ProductService]
})
export class AppComponent {
  title = 'service-example';
  products: Product[];

  constructor(private productService: ProductService){}

  getProducts(){
    this.products = this.productService.getProducts()
  }
}
