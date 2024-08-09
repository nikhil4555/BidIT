import { Component } from '@angular/core';
import { FavoriteService } from '../service/favorite.service';
import { product } from '../service/product';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  
  productlist:product[]=[];msg:any;
  
  constructor(private favservice:FavoriteService,private snackbar:MatSnackBar){}
  ngOnInit(){
    this.favservice.addfav().subscribe((data)=>{
      this.productlist=data;
    })
    if(this.productlist.length==0){
      this.msg="your Whistlist is empty😶"
    }
  }
  toggleFavorite(p:any) {
    
    this.snackbar.open('Removed From Fav', 'Close', {
      duration: 2000, // Duration in milliseconds
      panelClass: 'my-custom-snackbar' // Optional: Custom CSS class
    });
         
    p.pflag = !p.pflag;
    if(p.pflag!=true)
      this.favservice.delfavcart(p);
    
    
  }
}
