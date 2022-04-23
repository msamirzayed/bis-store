import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilter2Component } from './products-filter2.component';

describe('ProductsFilter2Component', () => {
  let component: ProductsFilter2Component;
  let fixture: ComponentFixture<ProductsFilter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFilter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
