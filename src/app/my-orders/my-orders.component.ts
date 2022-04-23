import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { OrderService } from '../shared/order.service';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../shared/user.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode,SelectionType,SortType   } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  selected = [];
  rows=[];
  temp=[];
  product:any;
  columns=[];
  l=4
  lt=5
  loadingIndicator = true;
  n
  loo = false
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  SortType = SortType;
  SelectionType = SelectionType;

  orders$;
  userName;
  orderitems={};
  items = []
  show = false
  show2 = false
  show3 = false
  fitems = []
  constructor(
    private orderService: OrderService,authService:AuthService,private user:UserService) {

       authService.user$.pipe(
        switchMap(u => orderService.getOrdersByUser(u.uid))
      ).subscribe(r=>{
       this.orders$ =  r
       this.temp = r
       for(let i of this.orders$){
         for(let o of i.item){
            this.orderitems={
                productTitle:o.product.title,
                productQuantity:o.quantity,
                productImg:o.product.imageUrl,
                productPrice:o.product.price,
            }
            this.fitems.push(this.orderitems)
         }
         console.log(this.orders$)
         this.items.push(this.orderitems)
       }


       this.loadingIndicator = false;
       this.user.get(this.orders$[0].userId).subscribe(l=>{
        this.userName = l.name
      })
      });
     }

  ngOnInit(): void {

  }

onSelect(i){

  this.show = true

}

onSelect2(i){

  this.show3 = true

}

}
