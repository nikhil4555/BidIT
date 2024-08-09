import { Component } from '@angular/core';
import { product } from '../service/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  msg:any;slno=0;
  buylist:product[]=[]
  constructor(private cartservice:CartService){}
  ngOnInit(){
    this.cartservice.returnbuydata().subscribe((data)=>{
      this.buylist=data;
      
      if(this.buylist.length==0)
        this.msg="No orders Present!"

      for(let i=1;i<=this.buylist.length;i++){
        this.slno=i;
      }
    })
  }

  
}
