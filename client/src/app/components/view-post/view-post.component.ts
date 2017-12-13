import { CommentService } from '../../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LikeService } from '../../services/like.service';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  imgLike = '';
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

  like = {
    foodId: '',
    userId: ''
  }
  flagLike = false;
  text = '';
  page = 1;
  isEnd = false;
  comments = [];
  constructor(private _foodService: FoodService, private _cmtService: CommentService,
    private _userService: UserService, private activeRroute: ActivatedRoute,
    private router: Router, private likeService: LikeService,
    private fb: FacebookService) {


    console.log('Initializing Facebook');

    fb.init({
      appId: '1879403279041868',
      version: 'v2.10'
    });

    this.activeRroute.params.subscribe((params: any) => {
      this.post._id = params.id;
      this.comment.foodId = params.id;
      this.like.foodId = params.id;
      this.getUser();
      console.log("OK:" + this.like.userId);

    });
    this._foodService.getPost(this.post._id).subscribe(res => this.post = res.food);
    this.fetchCmt();

  }

  ngOnInit() {

  }

  postCmt() {

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

  onLike() {
    const like = { foodId: this.like.foodId, userId: this.like.userId }

    this.likeService.hitLike(like).subscribe(res => {
      if (!res.success) {

      }
      else {
        this.post.like = res.food.like;
        if (!res.like) {
          this.imgLike = "assets/images/like-empty.png";
        }
        else {
          this.imgLike = "assets/images/like.png"
        }
      }



    });

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
        this.like.userId = res.message.userID;

        const like = { foodId: this.like.foodId, userId: this.like.userId }
        this.likeService.hitLike(like).subscribe(res => {
          if (res.success) {
            if (res.currentLike !== undefined) {
              this.imgLike = "assets/images/like-empty.png";
            }
            else {
              this.imgLike = "assets/images/like.png";
            }
          }
          else {
            this.imgLike = "assets/images/like-empty.png";
          }

        });
      });
    } else {
      this.router.navigate(['/signin']);
    }
  }

  onScrollDown() {
    this.fetchCmt();
  }

  share() {
    console.log(this.router.url);
    const options: UIParams = {
      method: 'share',
      href: 'https://mean-gonn.herokuapp.com/food/5a2d6229ec6a9b0014a84703'

      //href:'https://mean-gonn.herokuapp.com/'+this.router.url
    };

    this.fb.ui(options)
      .then((res: UIResponse) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);

  }
  /**
* This is a convenience method for the sake of this example project.
* Do not use this in production, it's better to handle errors separately.
* @param error
*/
  private handleError(error) {
    console.error('Error processing action', error);
  }
}
