import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(
    private socialAuthService: SocialAuthService,
    private _authService: AuthService,
    private fb:FormBuilder,
    private toastr: ToastrService
  ) {
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      password_confirm: ['',Validators.required],
      politics: ['',Validators.required]
    },
    { validator: this.checkPasswords })
  }
  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('password_confirm').value;

    return pass === confirmPass ? null : { notSame: true };
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    let data = this.form.value;
    console.log(this.form)
    data['register_type'] = 0;
    data['role'] = 1
    this._authService.signup(data).subscribe(res=>{
      console.log(res)
      this.form.enable()
      this.form.reset({})
      this.toastr.success('User created successfully');
    },err=>{
      this.form.enable()
      
      if (err.status === 401) {
        
          this.toastr.error('Email already taken');
        
      }
    })
  }

  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(res=>{
      let data = {
        email:res.email,
        password:res.email+'#facebook',
        role:1,
        register_type:2
      }
      this._authService.alterlogin(data).subscribe(
        res=>{
          if (!res['user']) {
            this.toastr.error('User not found');
          } else {
            this.toastr.success('Welcome');
            localStorage.setItem('access_token',res['access_token'])
          }
          this.form.enable()
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
        role:1,
        register_type:1
      }
      this.form.disable()
      this._authService.alterlogin(data).subscribe(
        res=>{
          if (!res['user']) {
            this.toastr.error('User not found');
          }else {
            this.toastr.success('Welcome');
            localStorage.setItem('access_token',res['access_token'])
          }
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
