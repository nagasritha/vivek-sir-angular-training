import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"login", component: UserLoginComponent},
  {path:"register", component: UserRegisterComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  exports:[
    RouterModule,
  ]
  
})
export class UsersModule { }
