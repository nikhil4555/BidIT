import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  checksignup:any;  
  signupform:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private route:Router){
    this.signupform=this.fb.group({
      FullName:['',Validators.required],
      Phone:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
      ConfirmPassword:['',Validators.required],
    })
  }

checksignupform(){
  if(this.signupform.value.Password==this.signupform.value.ConfirmPassword)
  {
    this.route.navigateByUrl('/login');
    localStorage.setItem('user',JSON.stringify(this.signupform.value));
  }
  else{
    Swal.fire({
      title: "Signup Failed",
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
