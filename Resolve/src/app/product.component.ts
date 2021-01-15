import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "./Product";

@Component({
    templateUrl: './product2.component.html'
})

export class Product2Component implements OnInit{
    public products: Product[];

    constructor(private route: ActivatedRoute){}

    ngOnInit(){
        this.products = this.route.snapshot.data['products']
    }
}