import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

   users;
  constructor(private userService:UserService) { 
    this.getListUser();

  }

  ngOnInit() {
  }

  getListUser()
  {
    this.userService.getListUser().subscribe(res=>{
      if(!res){
        this.users=null;
      }
      else{
        this.users=res.listuser;
      }
    })
  }

  onBlock(email){
    const emailUser={email:email}
    this.userService.setActiveUser(emailUser).subscribe(res=>{
      if(!res.success){
        window.location.reload();
        console.log(res)

      }
      else{
        window.location.reload();
        console.log(res)
      }
    });


  }

  onActive(email){

  }
}
