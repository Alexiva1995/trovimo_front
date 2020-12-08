import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  user:any
  loggedIn:any;
  constructor(
    private socialAuthService: SocialAuthService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      rememberme: new FormControl(false)
    })
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(res=>{
      let data = {
        email:res.email,
        password:res.email+'#facebook',
        role:'user',
        register_type:'facebook'
      }
      this._authService.alterlogin(data).subscribe(
        res=>{
          this.form.enable()
          console.log(res)
        },
        err=>{
          this.form.enable()
          console.log(err)
        }
      )

    })
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(res=>{
      let data = {
        email:res.email,
        password:res.email+'#google',
        role:'user',
        register_type:'google'
      }
      this.form.disable()
      this._authService.alterlogin(data).subscribe(
        res=>{
          this.form.enable()
          console.log(res)
        },
        err=>{
          this.form.enable()
          console.log(err)
        }
      )
    })
  
  }
  onSubmit() {
    this.form.disable()
    let data = this.form.value;
    this._authService.signin(data).subscribe(res=>{

    })
  }
}
