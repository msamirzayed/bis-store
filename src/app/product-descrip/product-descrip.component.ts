import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import {take, switchMap} from 'rxjs/operators'
import { DynamicService } from '../shared/dynamic.service';
import { ShoppingCart } from '../shared/models/cart';
import { CartService } from '../shared/cart.service';
import { Product } from '../shared/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-descrip',
  templateUrl: './product-descrip.component.html',
  styleUrls: ['./product-descrip.component.css']
})
export class ProductDescripComponent implements OnInit {
id
 product;
currentRate=2

  constructor(private productService:ProductService,
    private route:ActivatedRoute,private s:DynamicService) {


    }

 ngOnInit():void {
    this.route.params.subscribe(r=>{
      this.id = r.id
    })
    if (this.id) {
      this.productService.getProduct(this.id).valueChanges().pipe(take(1))
      .subscribe(p => {this.product = p
        this.product.imgito = this.product.img
      });




    }else{
console.log('error')
    }


  }

  onClose() {
    this.s.shows.next(false)
  }

  i(n:number){
      switch(n){
        case 0: this.product.imgito = this.product.img
        break;
        case 1: this.product.imgito = this.product.img2
        break;
        case 2: this.product.imgito = this.product.img3
        break;
       default:this.product.imgito = this.product.img
      }


  }







}
