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

  constructor(private _foodService: FoodService) {
    this._foodService.getPosts(this.page).subscribe(res => this.items = res.foods);
   }

  ngOnInit() {
  }

}
