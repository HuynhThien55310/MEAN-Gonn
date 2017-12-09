import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AdminViewPostsComponent } from './components/admin-view-posts/admin-view-posts.component';
import { HomeIngredientComponent } from './components/home-ingredient/home-ingredient.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminViewPostsComponent
  },
  {
    path: 'admin/add-ingredient',
    component: AddIngredientComponent
  },
  {
    path: 'admin/ingredient/edit/:id',
    component: AddIngredientComponent
  },
  {
    path: 'admin/add-post',
    component: AddPostComponent
  },
  {
    path: 'admin/view-post',
    component: AdminViewPostsComponent
  },
  {
    path: 'admin/post/edit/:id',
    component: AddPostComponent
  },
  {
    path: 'food/:id',
    component: ViewPostComponent
  },
  {
    path: 'ingredients',
    component: HomeIngredientComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
