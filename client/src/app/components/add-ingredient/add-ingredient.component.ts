import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from '../../services/ingredient.service';
@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {
  form: FormGroup;
  id: undefined;
  ; = {
    name: '',
    description: '',
    price: Number,
    unit: '',
    backdrop: ''
  };

  constructor(private formBuilder: FormBuilder, private ingreService: IngredientService,  private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [Number, Validators.required],
      unit: ['', Validators.required],
      backdrop: ['', Validators.required]
    });
  }


  ngOnInit() {
    // if update
    this.route.params.subscribe((params: any) => this.id = params.id);
    console.log(this.id);
    if (this.id !== undefined) {
      this.ingreService.getIngre(this.id).subscribe(res => {
        this.food = res.food;
        for (let i = 0; i < this.food.type.length; i++) {
          this.type.push({display: this.food.type[i],
                          value: this.food.type[i]});
      }
      });
    }
  }

  onSubmit() {
    // parse taginput to string array
    console.log(this.type);
    const temp = [];
    for (let i = 0; i < this.type.length; i++) {
        temp.push(this.type[i].value);
    }
    this.food.type = temp;
    console.log(temp);
    console.log(this.food);
    if (this.id !== undefined) {
        // update post
      this.ingreService.updateIngre(this.food, this.id).subscribe(res => {
        console.log(res);
      });
    } else {
      // create post
      this.ingreService.createIngre(this.food).subscribe(res => {
        console.log(res);
      });
    }
  }

}
