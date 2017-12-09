import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodService } from './services/food.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationService } from './services/authentication.service';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ActiveAccountComponent } from './components/active-account/active-account.component'
import { ActivationService} from './services/activation.service';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component'
import { FacebookModule } from 'ngx-facebook';
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
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ActiveAccountComponent,
    ResetpasswordComponent,

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
    FacebookModule.forRoot()
  ],
  providers: [FoodService,AuthenticationService,ActivationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
