import { Component } from '@angular/core';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  email:string='';
  password:string='';
  rememberMe:boolean=false;
  role:string="";

  handleLogin(){
    console.log('this.email',this.email);
    console.log('this.password',this.password);
    console.log('this.rememberMe',this.rememberMe);
    console.log('this.role',this.role);
    

  }

}
