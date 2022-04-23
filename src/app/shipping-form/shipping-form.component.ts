import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../shared/models/cart';

import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { OrderService } from '../shared/order.service';
import { Subscription } from 'rxjs';
import { Order } from '../shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart: ShoppingCart;
  shipping = {
    name:'',
    city:'',
    address1:'',
    address2:''
  };
  userSubscription: Subscription;
  userId;
  constructor(private router: Router,
    private authService: AuthService,
    private orderService: OrderService) { }

    ngOnInit() {
      this.userSubscription =
      this.authService.user$.subscribe(user => this.userId = user.uid);
    }

    ngOnDestroy() {
      this.userSubscription.unsubscribe();
    }

    async placeOrder() {

      let order = new Order(this.userId, this.shipping,  this.cart);
      const result = await this.orderService.placeOrder(order);

      this.router.navigate(['/order-success', result.key]);
      this.router.navigate(['/my-orders']);
    }

}
