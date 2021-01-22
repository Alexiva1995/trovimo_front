import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  constructor(
    private socialAuthService: SocialAuthService,
    private _authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        password_confirm: ['', Validators.required],
        politics: ['', Validators.required],
      },
      { validator: this.checkPasswords }
    );
  }
  checkPasswords(group: FormGroup): { notSame: boolean } {
    // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('password_confirm').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    const data = this.form.value;
    data.register_type = 0;
    data.role = 1;
    this._authService.signUp(data).subscribe(
      (response) => {
        this.form.enable();
        this.form.reset({});
        this.toastr.success('User created successfully');
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        window.location.reload();
        this.router.navigateByUrl('home');
      },
      (err) => {
        this.form.enable();
        if (err.status === 401) {
          this.toastr.error('Email already taken');
        }
      }
    );
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
        this._authService.alterLogin(data).subscribe(
          (response) => {
            if (!response.user) {
              this.toastr.error('User not found');
            } else {
              this.toastr.success('Welcome');
              localStorage.setItem('access_token', response.access_token);
              localStorage.setItem('user', JSON.stringify(response.user));
            }
            this.form.enable();
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
        this._authService.alterLogin(data).subscribe(
          (response) => {
            if (!response.user) {
              this.toastr.error('User not found');
            } else {
              this.toastr.success('Welcome');
              localStorage.setItem('access_token', response.access_token);
              localStorage.setItem('user', JSON.stringify(response.user));
            }
            this.form.enable();
            console.log(response);
          },
          (err) => {
            this.form.enable();
            console.log(err);
          }
        );
      });
  }

  get getForm() {
    return this.form.controls;
  }
  get getForm() {
    return this.form.controls;
  }
}
