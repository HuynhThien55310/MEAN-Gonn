import { FoodService } from '../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items = [];
  title = '';
  constructor(private _foodService: FoodService,  private activeRroute: ActivatedRoute ) {
    this.activeRroute.params.subscribe((params: any) => {
      this.title = params.title;
    });
    this._foodService.searchPost(this.title).subscribe(res => this.items = res.foods);
   }

  ngOnInit() {

  }





}
