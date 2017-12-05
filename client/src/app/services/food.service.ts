import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class FoodService {
  domain = 'http://localhost:3000/api';
  constructor(private _http: Http) { }
  getPosts(page: Number) {
    return this._http.get('/api/food/page/' + page)
      .map(res => res.json());
  }

  createPost(food) {
    return this._http.post(this.domain + '/food', food)
      .map(res => res.json());
  }
}
