import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShoppingCart } from '../shared/models/cart';
import { CartService } from '../shared/cart.service';
import { DynamicService } from '../shared/dynamic.service';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { RatesService } from '../shared/rates.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  too = false
  @Input ('l') rate;
  @Output('ll') rrate = new EventEmitter();
k
r
  constructor(private cartService: CartService,
    private s:DynamicService,
    private http:HttpClient, private rto:DynamicService,
    private drt:RatesService) {

        this.drt.key.subscribe(r=>{
          this.k = r
        })
        this.drt.rate.subscribe(r=>{
          this.r = r
        })

  }

  ngOnInit(): void {

  }
  addToCart() {

    this.cartService.addToCart(this.product);
  }



  getQuantity() {
    if (!this.shoppingCart) { return 0; }

    const item = this.shoppingCart.itemsMap[this.product.key];
    return item ? item.quantity : 0;
  }
  test(){
    this.s.shows.next(true)
  }

t(e){
  this.rrate.emit(e)
}

f(){
  this.drt.fn(this.k,this.r)
}
}
