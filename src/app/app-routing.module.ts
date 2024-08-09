import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BiddingComponent } from './bidding/bidding.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BiditComponent } from './bidit/bidit.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { AdminorderComponent } from './adminorder/adminorder.component';
import { SellComponent } from './sell/sell.component';
import { DummyComponent } from './dummy/dummy.component';
import { OrdersComponent } from './orders/orders.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:DashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'cart',component:CartComponent},
      {path:'orders',component:OrdersComponent},
      {path:'favorite',component:FavoriteComponent},
      {path:'bidding',component:BiddingComponent},
      {path:'sell',component:SellComponent },
      {path:'dummy',component:DummyComponent},
      {path:'details/:id',component:ProductdetailsComponent},
      {path:'biddetails/:id',component:BiditComponent}
    
    ]
  },
  {path:'admin',component:AdminComponent,
    children:[
      {path:'homeadmin',component:HomeadminComponent},
      {path:'adminorder',component:AdminorderComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
