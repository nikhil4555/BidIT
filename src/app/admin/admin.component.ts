import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  cartlen:any;
  isSidebarOpen: boolean = false;
  constructor(private cartservice:CartService){}
  ngOnInit(){
    this.cartlen=this.cartservice.getcarlen();
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
