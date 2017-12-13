import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LikeService {

  constructor(private _http: Http) { }

  hitLike(like){
    return this._http.post('/api/like', like)
    .map(res => res.json());
  }

}
