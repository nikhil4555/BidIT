import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ind:any;
  productlist:product[]=[];
  buylist:product[]=[];
  constructor() { }

  gettocart(p:any){
    if(!this.productlist.find((pro)=>pro.id == p.id)){
           this.productlist.push(p);
    return "Added to cart😍"
      }
  
  else{
    return "already existed in cart!"
  }
  }

  AddtoCart(){
    return of(this.productlist);
  }
  getcarlen(){
    return this.productlist.length;
  }
  deletecartitem(p:any){
    this.ind=this.productlist.findIndex((pro)=>pro.id==p.id)
    if(this.ind!=-1){

      this.productlist.splice(this.ind,1);
      return "Deleted successfully";
    }
    else
    return "Not found!";
  }

  
  // For Buy
  buynowdata(p:any){
    this.buylist.push(p);
  }
  returnbuydata(){
    return of(this.buylist);
  }

}
