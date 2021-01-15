import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
 
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Unsubscribable } from 'rxjs';
 
 
@Component({
  templateUrl: './product-detail.component.html',
})
 
export class ProductDetailComponent
{
 
   product:Product;
   id;
   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private _productService:ProductService){
                  console.log('create detail component')
   }
 
  
   /* Using snapshot */
   // ngOnInit() {
 
   //    //This still works but is deprecated
   //    //this.id=this._Activatedroute.snapshot.params['id'];  
 
   //    this.id=this._Activatedroute.snapshot.paramMap.get("id");
 
      
   //    let products=this._productService.getProducts();
   //    this.product=products.find(p => p.productID==this.id);
   // }
   
 
   /* Using Subscribe */
   
   routeParamSub: Unsubscribable;
   queryParamSub: Unsubscribable;
   page: string | number;
 
   ngOnInit() {
      this.routeParamSub=this._Activatedroute.paramMap.subscribe(params => { 
         console.log(params);
          this.id = params.get('id'); 
          let products=this._productService.getProducts();
          this.product=products.find(p => p.productID==this.id);    
      });
      this.queryParamSub = this._Activatedroute.queryParamMap.subscribe(params => {
         this.page = params.get('page') || 0;
         console.log('query page', this.page);
      })
 
      // This params is deprecated
 
      //this.sub=this._Activatedroute.params.subscribe(params => { 
      //    this.id = params['id']; 
      //    let products=this._productService.getProducts();
      //    this.product=products.find(p => p.productID==this.id);    
      //
      //});
   }
 
   ngOnDestroy() {
     this.routeParamSub.unsubscribe();
     this.queryParamSub.unsubscribe();
   }
   
   onBack(): void {
      this._router.navigate(['product']);
   }
}