import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CategoryService } from 'src/app/shared/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import {take} from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { format } from 'path';
import { SnackComponent } from 'src/app/snack/snack.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product:any={
    key:'',
    category:'',
    img:'',
    img2:'',
    img3:'',
    price:0,
    title:'',
    description:'',
    imgito:'',
    avail:true,
    rate:1
  }
  id
  cat
  nav = true
  durationInSeconds = 5;
  v
  constructor(private categories:CategoryService,
    private route:ActivatedRoute,
    private productService:ProductService,
     public router:Router,private _snackBar: MatSnackBar) {


    this.categories.getCategories().subscribe(r=>{
      this.cat = r
    })
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this.nav = false
      this.productService.getProduct(this.id).valueChanges().pipe(take(1))
      .subscribe(p => {this.product = p
        this.product.imgito = this.product.img
      });
    }

   }
   save(product) {
    console.log(product);
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin-products']);

  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) { return; }
    console.log(this.id);
    this.productService.delete(this.id);
    this.router.navigate(['/admin-products']);
  }
  cancel(){
    console.log('test cancel')
  }
key(){
  this.product.imgito = this.product.img
}
  ngOnInit(): void {
    this.product.imgito = this.product.img
    this.route.queryParams.subscribe(r=>{
        console.log(r.i)
        switch(r.i){
          case '0':this.product.imgito =this.product.img; break
          case '1':this.product.imgito =this.product.img2; break
          case '2':this.product.imgito =this.product.img3; break
        }

    })
  }

  openSnackBar(message: string, action) {
    if(this.product.avail == true){
      this.v = 'available'
   }else{
    this.v = 'Not available'
   }
    console.log(action)
    this._snackBar.open(message, action, {
      duration: 1500,
    });
  }

}
