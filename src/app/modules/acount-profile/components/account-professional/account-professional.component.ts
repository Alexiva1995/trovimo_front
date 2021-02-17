import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User_ } from './../../../../models/user.model';
import { UserService } from './../../../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-professional',
  templateUrl: './account-professional.component.html',
  styleUrls: ['./account-professional.component.scss']
})
export class AccountProfessionalComponent implements OnInit {

  user: User_;
  form: FormGroup;
  constructor(
    private service: UserService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    //this.getUser();
  }

  getUser() {
    this.service.getUser().subscribe(
      (res) => {
        /* User data */
        this.user = res['data'];
      },
      (err) => {
        this.toastr.error(err.error['message']);
      }
    );
  }

  fill() {
    this.form = this.fb.group({
      company_name: ['', Validators.required],
      email_account: ['',Validators.required,],
      id_company:['',Validators.required,],
      address: ['',Validators.required,],
      city: ['',Validators.required,],
      phones: ['',Validators.required,],
      auth_email:['',Validators.required,],
    });
  }

  onSubmit() {
    this.service.updateProfile(this.form.value).subscribe(
      (res) => {
        /* User data */
        this.user = res['data'];
        this.fill();
      },
      (err) => {
        this.toastr.error('Problems obtaining user information');
      }
    );
  }


}
