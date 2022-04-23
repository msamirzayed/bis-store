import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShoppingCart } from '../shared/models/cart';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
     if (!this.shoppingCart) { return 0; }

     const item = this.shoppingCart.itemsMap[this.product.key];
     return item ? item.quantity : 0;
  }

}
