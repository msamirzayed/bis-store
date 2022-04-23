import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescripComponent } from './product-descrip.component';

describe('ProductDescripComponent', () => {
  let component: ProductDescripComponent;
  let fixture: ComponentFixture<ProductDescripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
