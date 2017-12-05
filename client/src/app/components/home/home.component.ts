import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
