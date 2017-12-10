import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  firstname;
  lastname;
  email;
  avatar;
  role;
  birthday;
  constructor(private userService:UserService,
  private router:Router
  ) { 
    this.loadUserInfo();
  }

  ngOnInit() {
  }

  loadUserInfo(){
    if(localStorage.getItem("token")!==undefined){
      const token= localStorage.token;
      this.userService.getUser(token).subscribe(res=>{
        this.firstname=res.userInfo.firstname;
        this.lastname=res.userInfo.lastname;
        this.email=res.userInfo.email;
        this.avatar=res.userInfo.avatar;
        this.role= res.userInfo.role;
        this.birthday=res.userInfo.birthday;
        if(this.role=="admin"){
          this.router.navigate(['/admin'])
        }
      });
    }
    else{
      this.router.navigate(['/home'])
    }
  }

}
