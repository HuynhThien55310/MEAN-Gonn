import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  username: String;
  avatar;
  Authenlogin = false;
  title = '';
  constructor(private authen: AuthenticationService, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this.Authenlogin = true;
      this.username = localStorage.getItem('username');
      this.avatar = localStorage.getItem('avatar');
    } else {
      this.Authenlogin = false;
    }
  }
  onLogout() {
    this.authen.logout();
  }

  ngOnInit() {}

  search() {
    this.router.navigateByUrl('search/food/' + this.title);
  }
}
