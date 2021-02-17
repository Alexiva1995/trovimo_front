import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User_ } from './../../../../models/user.model';
import { UserService } from './../../../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-account-company',
  templateUrl: './account-company.component.html',
  styleUrls: ['./account-company.component.scss']
})
export class AccountCompanyComponent implements OnInit {
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
      username: [this.user.username || '', Validators.required],
      fullname: [
        this.user.show_name || '',
        Validators.required,
      ] /* Posiblemente cambie */,
      phones: [[this.user.phone] || ''] /* Posiblemente un arreglo */,
      country: [this.user.country || '', Validators.required],
      city: [this.user.city || '', Validators.required],
      postal_code: [this.user.postal_code || '', Validators.required],
      city_work: [[]],
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
