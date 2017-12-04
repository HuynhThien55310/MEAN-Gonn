import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodService } from './services/food.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

TagInputModule.withDefaults({
  tagInput: {
      placeholder: 'Nhập loại món ăn'
  }
});
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CKEditorModule,
    TagInputModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
