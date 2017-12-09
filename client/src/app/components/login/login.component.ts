import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service'

import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
//import { AuthService, AppGlobals } from 'angular2-google-login';
import { UserService } from '../../services/user.service'
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  formSignIn: FormGroup;
  message;
  messageClass;

  imageURL: string;
  email: string;
  name: string;
  token: string;
  constructor(private formBuilder: FormBuilder,
    private authenService: AuthenticationService,
    private router:Router, private zone: NgZone,
    private fb: FacebookService,
    private userService:UserService,
    private route: ActivatedRoute){
    this.createForm();
    console.log('Initializing Facebook');
    
        fb.init({
          appId: '1879403279041868',
          version: 'v2.10'
        });
    
  }

  ngOnInit() {
    // AppGlobals.GOOGLE_CLIENT_ID = '761282640471-mdi9sb06l1d22fojkn5le7r7ps9obq2n.apps.googleusercontent.com';
    // this.getData();
    // setTimeout(() => { this.googleAuthenticate() }, 50);

  }

  share() {
        let pathUrl = "https://hidden-dawn-45879.herokuapp.com/users/sign_in"
        console.log(pathUrl)
        const options: UIParams = {
          method: 'share',
          href: pathUrl
        };
    
        this.fb.ui(options)
          .then((res: UIResponse) => {
            console.log('Got the users profile', res);
          })
          .catch(this.handleError);
    
      }

   /**
   * Calling Google Authentication service
   */
  // googleAuthenticate() {
  //   this.authService.authenticateUser((result) => {
  //     //Using Angular2 Zone dependency to manage the scope of variables
  //     this.zone.run(() => {
  //       this.getData();
  //     });
  //   });
  // }

  createForm() {
    this.formSignIn = this.formBuilder.group({
      email: ['', Validators.required], // Username field
      password: ['', Validators.required] // Password field
    });
  }

  getData() {    
    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }
  onLoginSubmit() {
    const user = {
      email: this.formSignIn.get("email").value,
      password: this.formSignIn.get("password").value
    };
    this.authenService.login(user).subscribe(data => {
      if(!data.success){
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message; 
      }
      else{
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
        this.authenService.storeUserData(data.token);
        setTimeout(()=>{
          console.log(data);
          this.router.navigate(['/home'])
        },500);
      }
    });
  }

    /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    console.error('Error processing action', error);
  }

}
