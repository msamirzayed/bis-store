import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode,SelectionType,SortType   } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  selected = [];
  rows=[];
  temp=[];
  product:any;
  columns=[{name:'category'}];
  l=3
  loadingIndicator = true;
ss = false
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  SortType = SortType;
  SelectionType = SelectionType;
  constructor(private c:CategoryService,private route:ActivatedRoute,private router:Router) { }
  categories=[]
   k
   id;
  ngOnInit(): void {

  this.c.getCategories().subscribe(r=>{
    this.categories = r
    this.temp = [...r]
    this.rows = r
    this.loadingIndicator = false;
  })
  this.route.queryParams.subscribe(r=>{
    this.k = r.category

})
  }

  add(v){
      this.c.create(v)
      console.log(v)
  }


  remove(){
    if (!confirm('Are you sure you want to delete this category?')) { return; }
        this.c.delete(this.id)
  }
  onActivate(i){

  }
  onSelect(i){

      for(let l in i){
           this.id =  i[l][0].key
      }
      console.log(this.id)
 this.ss = true
  }
  searching(e:string){
    this.temp = (e) ?
    this.rows.filter(p => p.category.toLowerCase().includes(e.toLowerCase())) : this.rows;

  }

  // this.orders$ = authService.user$.pipe(
  //   switchMap(u => orderService.getOrdersByUser(u.uid))

  // );

}
