import { Component } from '@angular/core';
import { product } from '../service/product';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrl: './bidding.component.css'
})
export class BiddingComponent {
  productlist:product[]=[];
  res:any;

  evenIndexedProducts:product[] = [];

 

  constructor(private route:Router,private service:ProductService,private cartservice:CartService,private favservise:FavoriteService){
    this.service.getproductdata().subscribe((data)=>{
      this.productlist=data;
    })
  }
  ngOnInit() {
    this.filterEvenIndexedProducts();
  }

  
  filterEvenIndexedProducts() {
    this.evenIndexedProducts = this.productlist.filter((p)=>p.id%2==0);
  }

  toggleFavorite(p:any) {
    p.pflag = !p.pflag;
    if(p.pflag==true)
    this.favservise.getfavcart(p);
    else
    this.favservise.delfavcart(p);
    
  }
  AddtoCart(p:any){
    
   let res= this.cartservice.gettocart(p);
   alert(res);
    
  }

  Details(p:any){
    this.route.navigateByUrl('/user/details/'+p.id);
  }
  bid(p:any){
    this.route.navigateByUrl('/user/biddetails/'+p.id);
  }
  
}
