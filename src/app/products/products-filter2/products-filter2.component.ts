import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-products-filter2',
  templateUrl: './products-filter2.component.html',
  styleUrls: ['./products-filter2.component.css']
})
export class ProductsFilter2Component implements OnInit {
  categories$;
  @Input('k') k;
  @Input('category') category;
  constructor(private cat:CategoryService) { }

  ngOnInit(): void {
    this.cat.getCategories().subscribe(r=>{
      this.categories$ = r
    })
  }

}
