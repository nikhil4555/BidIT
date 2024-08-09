import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  cartlen:any;userdata:any;uname:any;
  isSidebarOpen: boolean = false;
  constructor(private cartservice:CartService,private route:Router){}
  ngDoCheck(){
    this.cartlen=this.cartservice.getcarlen();
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  ngOnInit(){
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);
    this.uname=this.userdata.FullName;
  }
  Logout(){
    this.route.navigateByUrl('/login');
    localStorage.removeItem('user');
  }
 
}
