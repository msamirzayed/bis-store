import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductDescripComponent } from './product-descrip/product-descrip.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackComponent } from './snack/snack.component';
import {MatButtonModule} from '@angular/material/button';
import { OrderViewComponent } from './order-view/order-view.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductsFilter2Component } from './products/products-filter2/products-filter2.component';
import { cuttPipe } from './shared/cut.pipe';
import { cutPipe } from './shared/cut2.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    CategoryFormComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    ProductsFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    CartSummaryComponent,
    ShippingFormComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductDescripComponent,
    SnackComponent,
    OrderViewComponent,
    ProductsFilter2Component,
    cuttPipe,
    cutPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatButtonModule,
    MatBadgeModule,
    NgbModule,







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
