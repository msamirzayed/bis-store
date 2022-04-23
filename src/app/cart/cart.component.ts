import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../shared/models/cart';
import { CartService } from '../shared/cart.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: ShoppingCart = new ShoppingCart(null);
  shoppingCartItemCount: number;
  shoppingCart: ShoppingCart;
  constructor(private shoppingCartService: CartService) { }

  addToCart(product: Product) {
    this.shoppingCartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.shoppingCartService.removeFromCart(product);
  }

  getQuantity(product: Product) {
    if (!this.cart) { return 0; }

    const item = this.cart.itemsMap[product.key];

    return item ? item.quantity : 0;
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {

      let data: any;
      data = temp.payload.child('/items').val();

      this.cart = new ShoppingCart(data);
      this.shoppingCartItemCount = this.cart.totalItemsCount;


    });
  }

}
