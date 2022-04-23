import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AppUser } from '../shared/models/app-user';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { CartService } from '../shared/cart.service';
import { ShoppingCart } from '../shared/models/cart';
import { Subscription } from 'rxjs';
import { Product } from '../shared/models/product';
import { EventEmitter } from 'protractor';
import { DynamicService } from '../shared/dynamic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
aa = false
l
ex = false
appUser: AppUser;

shoppingCartItemCount: number;
sub:Subscription
  constructor(private auth:AuthService,
    public router: Router,
    private route: ActivatedRoute,
    private shoppingCartService: CartService,
    categoryService: CategoryService,
    private s:DynamicService) { }

 async ngOnInit() {

   this.auth.appUser$.subscribe(appuser => this.appUser = appuser);




    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {
      let data: any;
      data = temp.payload.child('/items').val();

      let cart = new ShoppingCart(data);

      this.shoppingCartItemCount = cart.totalItemsCount;

    });
  }
  logout(){
    this.auth.logout();
  }
  logl(){
      this.router.navigate(['/login'],{queryParams: { n: '1' }})
  }
  logs(){
    this.router.navigate(['/login'],{queryParams: { n: '0' }})
  }
  test(){
    this.s.shows2.next(!this.aa)
    this.aa = !this.aa

  }
expand(e){
    this.ex = true
}

}
