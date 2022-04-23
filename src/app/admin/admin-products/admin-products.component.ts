import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode,SelectionType,SortType   } from '@swimlane/ngx-datatable';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  selected = [];
  rows=[];
  temp=[];
  product:any;
  columns=[];
  l=4
  loadingIndicator = true;
  id
  loo = false
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  SortType = SortType;
  SelectionType = SelectionType;
  constructor(private p:ProductService,private route:Router) {

    this.p.getProducts().subscribe(r=>{
      this.temp = [...r]
      this.rows = r
      this.product = r
      this.loadingIndicator = false;
    })
      // cache our list


      // push our inital complete list


   }

  ngOnInit(): void {


  }
  onActivate(i){

  }
  onSelect(i){


      for(let l in i){
           this.id =  i[l][0].key
      }
        this.loo = true


  }

  ddd(){

    this.route.navigate(['/product-form',this.id])
  }

   search(e:string) {
    this.temp = (e) ?
    this.rows.filter(p => p.title.toLowerCase().includes(e.toLowerCase())) : this.rows;

   }
}
