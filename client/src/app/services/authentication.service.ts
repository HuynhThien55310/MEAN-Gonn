import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'

import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {
  domain = "http://localhost:3000";
  authToken;
  user;
  options;
  constructor(private http: Http) { }

  resetPassword(token: String) {
    return this.http.get('/user/reset/'+ token)
    .map(res => res.json());
  }
  confirmResetPassword(password){
    return this.http.put('/user/confirmreset',password).map(res=>res.json());
  }
  forgotPassword(email){
    return this.http.put(this.domain+'/user/reset',email).map(res=>res.json());
  }
  registerUser(user) {
    return this.http.post(this.domain + '/user/register', user).map(res => res.json());
  }



  login(user){
    return this.http.post(this.domain + '/user/login',user).map(res=>res.json());
  }
  storeUserData(token){
    localStorage.setItem('token',token);
   // localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
 //   this.user=user;
  }
  createAuthenticationHeaders(){
    this.loadToken();
    this.options=new RequestOptions({
      headers: new Headers({
        'Content-type':'application/json',
        'authorization':this.authToken
      })
    });

  }
  loadToken(){
    this.authToken=localStorage.getItem('token');
  }
  getProfile(){
    this.createAuthenticationHeaders();
  }
}
