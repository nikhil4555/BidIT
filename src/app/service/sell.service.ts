import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  productlist:product[]=[];

  constructor() { }

  getdata(p:any) {
    this.productlist.push(p);
    // console.log(this.productlist+"getdata");
    
  }

  returndata() {
    // console.log(this.productlist+"return data");
    return of(this.productlist); 
    

  }
}
