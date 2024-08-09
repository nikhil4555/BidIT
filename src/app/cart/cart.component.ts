import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { product } from '../service/product';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  res:any;msg:any;
  isFavorite = false;
  productlist:product[]=[];
  constructor(private cartservice:CartService,private route:Router){ }
  ngOnInit(){
    this.cartservice.AddtoCart().subscribe((data)=>{
      this.productlist=data;
    })
    if(this.productlist.length==0)
      this.msg="Cart is Empty🫥"
  }
  

  incrementQuantity(product:any) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    product.quantity++;
  }

  decrementQuantity(product:any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
  bid(p:any){
    this.route.navigateByUrl('/user/biddetails/'+p.id);
  }
  
    showModal = false;
    selectedProduct: any = null;
  
    openModal(product: any) {
      this.selectedProduct = product;
      this.cartservice.buynowdata(this.selectedProduct);
      this.showModal = !this.showModal;
    }
  
    closeModal() {

      this.showModal = !this.showModal;
      this.selectedProduct = null;
    }
  
    purchaseProduct() {
      
      Swal.fire({
        title: "Purchased Successfully",
        width: 600,
        padding: "2.5em",
        color: "#716add",
        background: `#fff url("https://sweetalert2.github.io/images/trees.png")`,
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
      this.closeModal();
    }
  
  deletecart(p:any){
    this.res=this.cartservice.deletecartitem(p);
    alert(this.res);
  }  
  toggleFavorite(){
    this.isFavorite=!this.isFavorite;
  }
}
