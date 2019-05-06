import { Component, OnInit } from '@angular/core';

import { RegisterService } from './register.service';
import { detail} from '../models/detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent  {

  public detail : detail;
 
  constructor(private loginService: RegisterService, private router: Router) {
      this.detail = new detail();
  }
 
  validateLogin() {
    if(this.detail.username && this.detail.password && this.detail.name && this.detail.repass) {
        this.loginService.validateLogin(this.detail).subscribe(result => {
        console.log('result is ', result);
         if(result['status'] === 'success') {
        alert("This User Name already Exist")
        } else {
         
          
          this.register();
        }
          
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter user name and password');
    }
  }

  register(){
    if(this.detail.password ===this.detail.repass){

     
        this.loginService.register(this.detail).subscribe(result => {
        console.log('result is ', result);
         if(result['status'] === 'success') {
        alert("registration successful")
        this.router.navigate(['/login']);

        } else {
         alert("registaion failed")
        }
          
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter user name and password');
    }
  }
    
  
  
}
