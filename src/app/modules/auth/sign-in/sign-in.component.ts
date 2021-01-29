import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  user: SocialUser;
  //loggedIn: any;
  loggedIn: boolean;

  submitted = false;
  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.socialAuthService.initState.subscribe(
      () => {},
      console.error,
      () => {
        console.log('all providers are ready');
      }
    );
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);
    });
    this.form = this.fb.group({
      email: new FormControl('admin@gmail.com', [Validators.required]),
      password: new FormControl('123456789', [Validators.required]),
      rememberme: new FormControl(false),
    });
  }
  loginWithFacebook(): void {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((res) => {
        const data = {
          email: res.email,
          password: res.email + '#facebook',
          role: 1,
          register_type: 2,
        };
        this.authService.alterLogin(data).subscribe(
          (response) => {
            this.toastr.success('Welcome');
            localStorage.setItem(
              'access_token',
              response.original.access_token
            );
            localStorage.setItem(
              'user',
              JSON.stringify(response.original.user)
            );

            window.location.reload();
          },
          (err) => {
            this.form.enable();
            console.log(err);
          }
        );
      });
  }

  loginWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        const data = {
          email: res.email,
          password: res.email + '#google',
          role: 1,
          register_type: 1,
        };
        this.form.disable();
        this.authService.alterLogin(data).subscribe(
          (response) => {
            this.toastr.success('Welcome');
            localStorage.setItem(
              'access_token',
              response.original.access_token
            );
            localStorage.setItem(
              'user',
              JSON.stringify(response.original.user)
            );

            window.location.reload();
          },
          (err) => {
            this.form.enable();
            console.log(err);
          }
        );
      });
  }
  onSubmit(): void {
    this.form.disable();
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form);
    const data = this.form.value;
    this.authService.signIn(data).subscribe(
      (response) => {
        this.form.enable();
        this.form.reset({});
        this.toastr.success('Welcome');
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        window.location.reload();
        this.router.navigateByUrl('home');
      },
      (err) => {
        this.form.enable();
        if (err.status === 401) {
          this.toastr.error('Email or password invalid');
        }
      }
    );
  }
  get getForm(): any {
    return this.form.controls;
  }
}
