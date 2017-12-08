import { IngredientService } from './services/ingredient.service';
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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AdminViewPostsComponent } from './components/admin-view-posts/admin-view-posts.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
TagInputModule.withDefaults({
  tagInput: {
    secondaryPlaceholder: 'Nhập loại món ăn'
  }
});
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AddPostComponent,
    ViewPostComponent,
    AdminViewPostsComponent,
    AddIngredientComponent
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
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [FoodService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
