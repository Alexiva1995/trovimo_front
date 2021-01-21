import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  user: any;
  loggedIn: any;
  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('admin@gmail.com', [Validators.required]),
      password: new FormControl('123456789', [Validators.required]),
      rememberme: new FormControl(false)
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(res => {
      const data = {
        email: res.email,
        password: res.email + '#facebook',
        role: 1,
        register_type: 2
      };
      this.authService.alterLogin(data).subscribe(
        response => {
          if (!response.user) {
            this.toastr.error('User not found');
          } else {
            this.toastr.success('Welcome');
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('user', JSON.stringify(response.user));

            window.location.reload();
          }
          this.form.enable();
        },
        err => {
          this.form.enable();
          console.log(err);
        }
      );

    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(res => {
      const data = {
        email: res.email,
        password: res.email + '#google',
        role: 1,
        register_type: 1
      };
      this.form.disable();
      this.authService.alterLogin(data).subscribe(
        response => {
          if (!response.user) {
            this.toastr.error('User not found');
          }else {
            this.toastr.success('Welcome');
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('user', JSON.stringify(response.user));
            window.location.reload();
          }
          this.form.enable();
          console.log(res);
        },
        err => {
          this.form.enable();
          console.log(err);
        }
      );
    });

  }
  onSubmit(): void {
    this.form.disable();
    console.log(this.form);
    const data = this.form.value;
    this.authService.signIn(data).subscribe(
      response => {
        this.form.enable();
        this.form.reset({});
        this.toastr.success('Welcome');
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        window.location.reload();
    }, err => {
      this.form.enable();
      if (err.status === 401) {
          this.toastr.error('Email or password invalid');
      }
    });
  }
}
