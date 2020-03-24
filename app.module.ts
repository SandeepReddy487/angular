import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { NavComponent } from './nav/nav.component';
import { HttpComponent } from './http/http.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { from } from 'rxjs';
import { Http1Component } from './http1/http1.component';
import { PipesComponent } from './pipes/pipes.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ProductAlertsComponent,
    NavComponent,
    HttpComponent,
    ReactiveComponent,
    TemplateComponent,
    Http1Component,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class AppModule { }
