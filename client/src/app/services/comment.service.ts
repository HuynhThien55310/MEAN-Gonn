import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class CommentService {

  constructor(private _http: Http) { }
    postComment(cmt) {
      console.log(cmt);
      return this._http.post('/api/food/comment', cmt)
        .map(res => {
          console.log(res);
          res.json();
        });
    }

    getComments(foodId: String, page: Number) {
      return this._http.get('/api/food/comments/' + foodId + '/' + page)
        .map(res => res.json());
    }
}
