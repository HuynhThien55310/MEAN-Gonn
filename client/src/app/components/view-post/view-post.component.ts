import { CommentService } from '../../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post = {
    _id: '',
    title: String,
    body: String,
    type: String,
    backdrop: String,
    posted: Date,
    like: 0,
    share: 0,
    comment: 0
  };
  comment = {
    foodId: '',
    userId: '',
    text: ''
  };
  text = '';
  page = 1;
  isEnd = false;
  comments = [];
  constructor(private _foodService: FoodService, private _cmtService: CommentService,
     private _userService: UserService, private activeRroute: ActivatedRoute,
    private router: Router) {
    this.activeRroute.params.subscribe((params: any) => {
      this.post._id = params.id;
      this.comment.foodId = params.id;
    });
    this._foodService.getPost(this.post._id).subscribe(res => this.post = res.food);
    this.fetchCmt();
  }

  ngOnInit() {

  }

  postCmt() {
    this.getUser();
    setTimeout(() => {

    }, 500);
    this.comment.text = this.text;
    this._cmtService.postComment(this.comment).subscribe(res => {
      this.text = '';
    });
    this.page = 1;
    this.isEnd = false;
    this.comments = [];
    this.fetchCmt();
    console.log('fetch cmt sau khi cmt ' + this.comments);
  }

  fetchCmt() {
    if (this.isEnd) {
      return;
    }
    console.log('fetch comment');
    console.log(this.post._id);
    this._cmtService.getComments(this.post._id, this.page).subscribe(res => {
      this.page++;
      this.comments = this.comments.concat(res.cmts);
      console.log(this.comments);
      if (res.isEnd) {
        this.isEnd = true;
      }
    });
  }

  getUser() {
     if (localStorage.getItem('token') !== undefined) {
        const token = localStorage.token;
          this._userService.getUser(token).subscribe(res => {
            this.comment.userId = res.message.userID;
          });
        console.log(this.comment);
    } else {
      this.router.navigate(['/signin']);
    }
  }

  onScrollDown() {
    this.fetchCmt();
  }
}
