import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { BiddingComponent } from './bidding/bidding.component';
import { SellComponent } from './sell/sell.component';
import { BiditComponent } from './bidit/bidit.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { LandingComponent } from './landing/landing.component';
import { AdminorderComponent } from './adminorder/adminorder.component';
import { DummyComponent } from './dummy/dummy.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    HomeComponent,
    FavoriteComponent,
    CartComponent,
    BiddingComponent,
    SellComponent,
    BiditComponent,
    ProductdetailsComponent,
    HomeadminComponent,
    LandingComponent,
    AdminorderComponent,
    DummyComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
