import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(
    private socialAuthService: SocialAuthService,
    private _authService: AuthService
  ) {
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      password_confirm: new FormControl('',Validators.required),
      politics: new FormControl('')
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.form.disable();
    let data = this.form.value;
    console.log(this.form)
    this._authService.signup(data).subscribe(res=>{
      console.log(res)
      this.form.enable()
    })
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
}
