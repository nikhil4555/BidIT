import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { product } from '../service/product';
import { CartService } from '../service/cart.service';
import { FavoriteService } from '../service/favorite.service';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent {
  
  productlist:product[]=[];
  res:any;
 
  constructor(private route:Router,private service:ProductService,private cartservice:CartService,private favservise:FavoriteService,private snackbar:MatSnackBar){
    this.service.getproductdata().subscribe((data)=>{
      this.productlist=data;
    })
  }

  toggleFavorite(p:any) {
    p.pflag = !p.pflag;
    if(p.pflag){

      this.snackbar.open('Added to Fav', 'Close', {
        duration: 2000, // Duration in milliseconds
        panelClass: 'my-custom-snackbar' // Optional: Custom CSS class
      });
    }
    if(!p.pflag){
      this.snackbar.open('Removed from Fav', 'Close', {
        duration: 2000, // Duration in milliseconds
        panelClass: 'my-custom-snackbar' // Optional: Custom CSS class
      });
    }
    if(p.pflag==true)
    this.favservise.getfavcart(p);
    else
    this.favservise.delfavcart(p);
    
  }
  AddtoCart(p:any){
    
   
     this.res= this.cartservice.gettocart(p);
  
  this.res= this.snackbar.open(this.res, 'Close', {
  duration: 2000, // Duration in milliseconds
  panelClass: 'my-custom-snackbar' // Optional: Custom CSS class
});
     
    
  }

  Details(p:any){
    this.route.navigateByUrl('/user/details/'+p.id);
  }
  bid(p:any){
    this.route.navigateByUrl('/user/biddetails/'+p.id);
  }
  // showScrollToTop = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.showScrollToTop = window.pageYOffset > 300;
  // }

  // scrollToTop() {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
  
}
