import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteService } from '../service/favorite.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  
  p:any;res:any;
  constructor(private bs:ActivatedRoute,private service:ProductService,private snackbar:MatSnackBar,private favservise:FavoriteService,private cartservice:CartService){}
  ngOnInit(){
    this.res=this.bs.snapshot.paramMap.get('id');
    this.p=this.service.productbyId(this.res);
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

}
