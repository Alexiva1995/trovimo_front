import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { from } from 'rxjs';
import { ExpertService } from '../../services/expert/expert.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  observation: any;
  rating: any;
  user: any;
  @Input() expert_id : any;
  @Output() refresh = new EventEmitter<any>();

  load: any = 0;
  constructor( private Expert: ExpertService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.photo);
   }

  ngOnInit(): void {
  }

  addRating() {
    this.load= 1;
   this.Expert.AddRating(this.expert_id, this.observation, this.rating).subscribe(
      (data: any) => {
        this.observation="";
        this.load = 0;
        this.refresh.emit(true);
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }


}
