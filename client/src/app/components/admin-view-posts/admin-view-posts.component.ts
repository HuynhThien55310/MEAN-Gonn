import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
@Component({
  selector: 'app-admin-view-posts',
  templateUrl: './admin-view-posts.component.html',
  styleUrls: ['./admin-view-posts.component.css']
})
export class AdminViewPostsComponent implements OnInit {

  items = [];
  page = 1;
  isEnd = false;
  constructor(private _foodService: FoodService) {
    this.fetchPost();
   }

  ngOnInit() {
  }

  fetchPost() {
    console.log('vao');
    if (this.isEnd) {
      return;
    }
    this._foodService.getPosts(this.page).subscribe(res => {
      this.page++;
      this.items = this.items.concat(res.foods);
      console.log(this.items);
      if (res.isEnd) {
        this.isEnd = true;
      }
    });
  }

  onScrollDown() {
    this.fetchPost();
  }

}
