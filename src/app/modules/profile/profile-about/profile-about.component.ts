import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ExpertService } from '../../../services/expert/expert.service';
@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {

  @Input() expert : any;
  phones: any;
  emails: any;
  load:any =1;
  user: any;
  constructor(    private Expert: ExpertService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    console.log(this.expert);
    this.phones= JSON.parse(this.expert.phones);
    this.load=0;
  }

  refresh(event){
    if(event == true){
      this.getExpertProfile(this.expert.id, this.user.id);
    }
  }

  getExpertProfile(id, user_id) {
    this.Expert.getExpertProfile(id, user_id).subscribe(
      (data: any) => {
        this.expert = data.Expert;
        console.log(this.expert);
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }

}
