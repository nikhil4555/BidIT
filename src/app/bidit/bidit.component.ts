  import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { ProductService } from '../service/product.service';
import { interval, map, take } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { product } from '../service/product';
  

  @Component({
    selector: 'app-bidit',
    templateUrl: './bidit.component.html',
    styleUrl: './bidit.component.css',
    animations: [
      trigger('cartAnimation', [
        state('hidden', style({
          opacity: 0,
          transform: 'translateX(100%)'
        })),
        state('visible', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
        transition('hidden => visible', [
          animate('0.5s ease-in')
        ]),
        transition('visible => hidden', [
          animate('0.5s ease-out')
        ])
      ])
    ]
  })
  export class BiditComponent{
    
    res: any;
    p: any;
    bidprice: number = 0;
    minBidPrice: any;
    minutes: number = 5;
    seconds: number = 0;
     

 
  
    constructor(private active: ActivatedRoute, private service: ProductService) {}
  
    ngOnInit() {
      this.res = this.active.snapshot.paramMap.get('id');
      this.p=this.service.productbyId(this.res);
        this.bidprice = Number(this.p.price.discountedPrice);
        this.minBidPrice = Number(this.p.price.discountedPrice);
  
        const timer$ = interval(1000).pipe(
          take(5 * 60), // 5 minutes * 60 seconds/minute
          map(secondsElapsed => {
            const totalSeconds = 5 * 60 - secondsElapsed;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            return { minutes, seconds };
          })
        );
  
        timer$.subscribe(time => {
          this.minutes = time.minutes;
          this.seconds = time.seconds;
        });
    }

    cartItems = [];
    cartState = 'hidden';
  
    addToCart(product:any) {
      // this.cartItems.push(product);
      this.cartState = 'visible';
      setTimeout(() => {
        this.cartState = 'hidden';
      }, 2000);
    }
  
    decrementQuantity(p: any) {
      if (this.bidprice > this.minBidPrice) {
        this.bidprice -= 5000;
        // this.bidprice = Math.max(this.bidprice, this.minBidPrice);
      }
    }
  
    incrementQuantity(p: any) {
      this.bidprice += 5000;
    }
  
    bid() {
      alert(`Congratulations! You've placed a bid of $${this.bidprice.toFixed(2)}`);
      // Here you can add logic to submit the bid to your backend
    }

 
  
  }
