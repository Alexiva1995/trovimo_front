import { ToastrService } from 'ngx-toastr';
import { User_ } from './../../../../models/user.model';
import { UserService } from './../../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss'],
})
export class MainInfoComponent implements OnInit {
  user: User_;
  form: FormGroup;
  facebook: string;
  facebookShow = false;
  instagram: string;
  instagramShow = false;
  linkedin: string;
  linkedinShow = false;
  twitter: string;
  twitterShow = false;
  youtube: string;
  youtubeShow = false;
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
