import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { NavComponent } from './nav/nav.component';
import { HttpComponent } from './http/http.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { Http1Component } from './http1/http1.component';
import { PipesComponent } from './pipes/pipes.component';
const routes: Routes = [
  // { path: '', component: ProductListComponent },
  // { path: 'products/:productId', component: ProductDetailsComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'shipping', component: ShippingComponent },
  // {path:'product-list',component:ProductListComponent,children:[
    {path:'nav',component:NavComponent},
{path:'reactive',component:ReactiveComponent},
  {path:'template',component:TemplateComponent},
 {path:'http',component:HttpComponent},
//  {path:'http1',component:Http1Component},
 {path:'pipes',component:PipesComponent}
  // ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
