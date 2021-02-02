import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {DetailsViewService} from '../../../../services/details-view/details-view.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor( private fb: FormBuilder , private DetailsService: DetailsViewService,) {
    this.formGroup = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          ),
        ]),
      ],
      phone: [
        "",
        Validators.compose([Validators.required, Validators.minLength(9)]),
      ],
      name: [
        "",
        Validators.compose([Validators.required]),
      ],
      message:["", Validators.required ]
    });
   }
  public formGroup: FormGroup;

  ngOnInit(): void {
  }


  sendform(){
    Swal.fire({
      title: 'Send mesagge',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        this.DetailsService.Contact(this.formGroup.value , 'contact').subscribe(resp=>{
         console.log(resp)
          Swal.fire({
            title: 'Your message has been sended successfully',
            icon: 'success'
          });
        },err =>{
          Swal.fire({
            title: 'An error occurred, please try again later',
            icon: 'error'
          });
        })
      }
    })
  }


  

}
