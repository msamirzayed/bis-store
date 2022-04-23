import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  categories$;
  @Input('k') k;
  @Input('category') category;
  constructor(private cat:CategoryService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.cat.getCategories().subscribe(r=>{
       this.categories$ = r
     })

  }

}
