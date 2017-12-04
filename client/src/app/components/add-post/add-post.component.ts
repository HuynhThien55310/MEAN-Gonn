import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from '../../services/food.service';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  form: FormGroup;
  title: String;
  body: String;
  type = [];
  backdrop: String;
  constructor(private formBuilder: FormBuilder, private foodService: FoodService) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      type: [[], Validators.required],
      backdrop: ['', Validators.required]
    });
  }


  ngOnInit() {

  }

  onSubmit() {
    const temp = [];
    for (let i = 0; i < this.type.length; i++) {
        temp.push(this.type[i].value);
    }
    console.log(temp);
    const food = {
      title: this.title,
      body: this.body,
      type: temp,
      backdrop: this.backdrop
    };
    console.log(food);
    this.foodService.createPost(food).subscribe(res => {
      console.log(res);
    });
  }
}
