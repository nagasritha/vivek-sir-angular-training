import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo, User } from '../models/user.model';
import { catchError, tap, throwError } from 'rxjs';

const url='http://localhost:8000/api/users'

interface LoginResponse{
  user:User;
  token:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  
  getAllUsers() {
    return this.http.get<User[]>(url,{
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      }
    });
  }
  
  user?:User
  constructor(private http:HttpClient) { 
    const userStr=localStorage.getItem('user');
    if(userStr){
      this.user=JSON.parse(userStr);
    }
  }

  _processLogin=(userData:LoginResponse)=>{
    localStorage.setItem('user', JSON.stringify(userData.user));
    localStorage.setItem('token', userData.token);
    this.user=userData.user;
  }

  _processLogout=()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.user=undefined;
  }

  login(loginInfo:LoginInfo){
    return this.http
              .post<LoginResponse>(`${url}/login`,loginInfo)
              .pipe(
                tap(this._processLogin),
                catchError(error=>{
                  this._processLogout();
                  return throwError(()=>error);
                })
              )
              
              ;
  }

  logout(){
    this._processLogout();
  }

  get currentUser():User|undefined{
    const userStr= localStorage.getItem('user');
    if(userStr){
      return JSON.parse(userStr);
    }else{
      return undefined;
    }
  }
}
