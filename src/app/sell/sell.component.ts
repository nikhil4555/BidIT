import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellService } from '../service/sell.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent {
  sell:any;
  sellform:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private sellservice:SellService,private route:Router){
    this.sellform=this.fb.group({
      id:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required],
      location:['',Validators.required],
      date:['',Validators.required],
      image:['',Validators.required],
      description:['',Validators.required],
    })
  }

  checksell(){
    if(this.sellform.valid){ 
    this.sell={
      id:this.sellform.value.id,
      title:this.sellform.value.title,
      price:this.sellform.value.price,
      location:this.sellform.value.location,
      date:this.sellform.value.date,
      image:this.sellform.value.image,
      description:this.sellform.value.description,
      pflag:false,
      quantity:0
    }
  }
  this.sellservice.getdata(this.sell);
  this.route.navigateByUrl('/user/dummy')
  }
}
