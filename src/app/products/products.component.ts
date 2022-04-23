import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShoppingCart } from '../shared/models/cart';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';
import { switchMap } from 'rxjs/operators';
import { DynamicService } from '../shared/dynamic.service';
import { HttpClient } from '@angular/common/http';
import { RatesService } from '../shared/rates.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  shouldRun =(h => h.test(window.location.host));
showActions;
 products: Product[] = [];
 filteredProducts: Product[];
  cart: ShoppingCart;
  category: string;
  k
  sh = false
  key
  subscription: Subscription;
  filteredStatus = '';
sh2 = false
  rt =1

  constructor(  private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: CartService,
    private s:DynamicService,
    private router:Router,private http:HttpClient,
    private drt:RatesService) {

      this.s.shows.subscribe(r=>{
        this.sh = r
        console.log(this.sh)
      })
      this.s.shows2.subscribe(r=>{
        this.sh2 = r

      })
    }

    async ngOnInit() {

      this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => {
        let temp: any;
        temp = cart.payload.child('/items').val();
        this.cart = new ShoppingCart(temp);
      });

    this.productService.getProducts()
    .pipe(switchMap( products => {
      let temp: any[];
      temp = products;
      this.products = temp;
      return this.route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
          this.k = this.category

      });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

      search(query:string) {
        this.filteredProducts = (query) ?
        this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
        this.products;

       }

       ttt(i){

        this.key = this.filteredProducts[i].key
        if(this.k != null){
          this.router.navigate(['/products/',this.key], {queryParams:{category:this.filteredProducts[i].category}})
        }else{
          this.router.navigate(['/products/',this.key])

        }
       }

fn(){
  this.http.patch('https://bis-store.firebaseio.com/products/'+this.key+'.json',
  {rate:this.rt}).subscribe();
}


aa(e){
  this.rt = e
  this.drt.rate.next(this.rt)
  this.drt.key.next(this.key)
}



}
