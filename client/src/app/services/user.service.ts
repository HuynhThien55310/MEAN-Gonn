import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  getUser(token: String) {
    return this._http.get('/user/getuser/' + token)
      .map(res => res.json());
  }

  getListUser(){
    return this._http.get('/user/getlistuser').map(res=>res.json());
  }
  setActiveUser(email){
    return this._http.post('/user/blockuser',email).map(res=>res.json());
  }

}
