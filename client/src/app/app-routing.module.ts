import { SearchComponent } from './components/search/search.component';

import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component'
import { ActiveAccountComponent } from './components/active-account/active-account.component'
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component'
import { AdminViewPostsComponent } from './components/admin-view-posts/admin-view-posts.component';
import { HomeIngredientComponent } from './components/home-ingredient/home-ingredient.component';
import { ViewIngredientComponent } from './components/view-ingredient/view-ingredient.component';

import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UserManagementComponent } from './components/user-management/user-management.component';




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
    path: 'ingredient/:id',
    component: ViewIngredientComponent
  },
  {
    path: 'ingredients',
    component: HomeIngredientComponent
  },
  {
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'forgotpassword',
    component: ForgetpasswordComponent
  },

  {
    path: 'active/:token',
    component: ActiveAccountComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetpasswordComponent

  },
  {
    path:'user-info',
    component:UserinfoComponent
  },
  {
    path: 'search/food/:title',
    component: SearchComponent
  },
  {
    path:'admin/user-management',
    component: UserManagementComponent
  }
  ,
  {
    path: '',
    component: HomeComponent
  },
  { path: '**',
    redirectTo: '/'

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
