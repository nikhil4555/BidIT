import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userdata:any;
  loginform:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private route:Router){
    this.loginform=this.fb.group({
      Username:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  checklogin(){
    this.userdata=localStorage.getItem('user');
    this.userdata=JSON.parse(this.userdata);
    if((this.userdata!=null && (this.loginform.value.Username===this.userdata.FullName && this.loginform.value.Password===this.userdata.Password))){
      this.route.navigateByUrl('/user/home'); 
    }
    else if(this.loginform.value.Username=='admin'&&this.loginform.value.Password=='admin123'){
      this.route.navigateByUrl('/admin/homeadmin')
    }
    else{
      Swal.fire({
        title: "login failed",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
 

  }

}
