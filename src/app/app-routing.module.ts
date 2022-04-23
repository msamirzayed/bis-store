import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth-guard.service';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminAuthGuard } from './shared/admin-auth-guard.service';
import { ProductDescripComponent } from './product-descrip/product-descrip.component';
import { OrderViewComponent } from './order-view/order-view.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'check-out', component: CheckOutComponent,canActivate: [AuthGuard] },
  { path: 'order-success/:id', component: OrderSuccessComponent,canActivate: [AuthGuard]  },
  { path: 'my-orders', component: MyOrdersComponent,canActivate: [AuthGuard] },
  { path: 'product-form', component: ProductFormComponent, canActivate: [AuthGuard ,AdminAuthGuard]},
  { path: 'product-form/:id', component: ProductFormComponent,canActivate: [AuthGuard ,AdminAuthGuard]},
  { path: 'product-descrip', component: ProductDescripComponent },
  { path: 'product-descrip/:id', component: ProductDescripComponent },
  { path: 'category-form', component: CategoryFormComponent,canActivate: [AuthGuard ,AdminAuthGuard] },
  { path: 'category-form/:id', component: CategoryFormComponent,canActivate: [AuthGuard ,AdminAuthGuard] },
  { path: 'admin-orders', component: AdminOrdersComponent,canActivate: [AuthGuard ,AdminAuthGuard] },
  { path: 'order-view/:id', component: OrderViewComponent,canActivate: [AuthGuard ,AdminAuthGuard] },
  { path: 'admin-products', component: AdminProductsComponent,canActivate: [AuthGuard ,AdminAuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: '**', component: ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
