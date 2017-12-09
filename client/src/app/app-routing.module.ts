import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component'
import { ActiveAccountComponent } from './components/active-account/active-account.component'

import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component'

const appRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
    path:'resetpassword/:token',
    component:ResetpasswordComponent

  },

  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
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