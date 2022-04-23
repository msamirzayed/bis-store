import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode,SelectionType,SortType   } from '@swimlane/ngx-datatable';
import { OrderService } from '../shared/order.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  orderByUser=[]
  selected = [];
  rows=[];
  temp=[];
  columns=[];
  l=4
  lt=5
  userItem
  loadingIndicator = true;
items = []
show = false
show2 = false
show3 = false
fitems = []
orders$
userName
orderitems = {}
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  SortType = SortType;
  SelectionType = SelectionType;;
  constructor(private route:ActivatedRoute,
    private orderService:OrderService
    , private authService:AuthService,private user:UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.userItem = p.id
    if(this.userItem != null || this.userItem != undefined){
      this.user.get(this.userItem).subscribe(a=>{
        this.userName = a
      })

      this.orderService.getOrdersByUser(this.userItem)
        .subscribe(r=>{
        this.orders$ = r

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

          this.items.push(this.orderitems)
        }
       });

    }else{
      console.log('something went wrong')
    }

    })

    this.loadingIndicator = false;

  }

  onSelect(i){

    this.show = true

  }
  onActivate(i){

  }
  onActivate2(i){

  }
  onSelect2(i){

    this.show3 = true
    
  }


}
