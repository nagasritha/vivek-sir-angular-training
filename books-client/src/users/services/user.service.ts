import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo, User } from '../models/user.model';

const url='http://localhost:8000/api/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(url);
  }

  login(loginInfo:LoginInfo){
    return this.http.post(`${url}/login`,loginInfo);
  }
}
