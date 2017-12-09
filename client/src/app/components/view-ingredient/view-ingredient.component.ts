import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.css']
})
export class ViewIngredientComponent implements OnInit {

  ingre = {
    name: String,
    price: String,
    unit: String,
    backdrop: String,
    date: Date,
    description: String
  };

  constructor(private _ingreService: IngredientService, private route: ActivatedRoute) {
    let id: any;
    this.route.params.subscribe((params: any) => id = params.id);
    this._ingreService.getIngre(id).subscribe(res => this.ingre = res.ingredient);
  }

  ngOnInit() {

  }

}
