import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { UserService } from 'src/app/shared/user.service';
import { AuthService } from 'src/app/shared/auth.service';
import { switchMap } from 'rxjs/operators';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode,SelectionType,SortType   } from '@swimlane/ngx-datatable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
orders$;
orderByUser=[]
selected = [];
rows=[];
temp=[];
columns=[];
l=4
id
loadingIndicator = true;
userName = []
userNameIds=[]
@ViewChild(DatatableComponent) table: DatatableComponent;

ColumnMode = ColumnMode;
SortType = SortType;
SelectionType = SelectionType;;
  constructor(private orderService:OrderService,private user:UserService,
    private authService:AuthService,private route:ActivatedRoute,
    private router:Router) {

      this.orderService.getOrders().subscribe(r=>{
        this.orders$ = r
        this.loadingIndicator = false;


        // for(let i in this.orders$){
        //   this.userNameIds.push(this.orders$[i].userId)
        //   this.user.get(this.userNameIds[i]).subscribe(r=>{
        //     this.userName.push(r)
        //   })
        // }

      })

   }

  ngOnInit(): void {


  }

  onActivate(i){

  }

  onSelect(i){

this.id=i.selected[0].userId
this.router.navigate(['/order-view',this.id])

  }




}
