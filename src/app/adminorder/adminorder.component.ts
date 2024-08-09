import { Component } from '@angular/core';
import { product } from '../service/product';
import { SellService } from '../service/sell.service';


@Component({
  selector: 'app-adminorder',
  templateUrl: './adminorder.component.html',
  styleUrl: './adminorder.component.css'
})
export class AdminorderComponent {
  productlist:product[]=[];
  constructor(private sellservice:SellService){}
  ngOnInit(){
    this.sellservice.returndata().subscribe((data)=>{
      this.productlist=data;
    })
  }
 

}
