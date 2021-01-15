import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "./product.service";

@Injectable()
export class ProductListResolveService implements Resolve<any>{

    constructor(private route: Router, private productService: ProductService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.productService.getProducts()
    }
    
}