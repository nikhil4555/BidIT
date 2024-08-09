import { Component } from '@angular/core';
import { SellService } from '../service/sell.service';
import { product } from '../service/product';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  productlist:product[]=[];
  constructor(private sellservice:SellService){}
  ngOnInit(){
    this.sellservice.returndata().subscribe((data)=>{
      this.productlist=data;
    })
  }
}
