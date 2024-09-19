import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(private userService: UserService){}
  
  users:User[]=[]

  errorCode?:number;
  subscriber:any;

  

  getAllUsers(){
    this.subscriber=this.userService.getAllUsers()
      .subscribe({
        next: (users:User[])=>this.users=users,
        error:error=>this.errorCode=error.status
      })
  }

  ngOnInit(){
    this.getAllUsers();
  }

}
