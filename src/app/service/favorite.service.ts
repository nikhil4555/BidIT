import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  
  productlist:product[]=[];
  constructor() { }
  
  index:any;
  getfavcart(p:any){
      this.productlist.push(p);
  }
  delfavcart(p:any){
    this.index= this.productlist.findIndex((data)=>data.id==p.id);
    this.productlist.splice(this.index,1);
  }
  addfav(){
    return of(this.productlist);
  }
} 
