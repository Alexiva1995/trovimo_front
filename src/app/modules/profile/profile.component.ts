import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpertService } from '../../services/expert/expert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id:any;
  expert:any;
  load: any = 1;
  user:any;
  rating_total: any = 0;
  url:any;
  option: any;
  name:any ="";
  email:any ="";
  message:any ="";
  phone:any="";
  msj:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Expert: ExpertService
  ) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.route.snapshot.paramMap.get('id');
    this.url= "profile/"+this.id;
    if(this.user){
      this.getExpertProfile(this.id, this.user.id);    
    }else{
      this.getExpertProfile(this.id, null); 
    }

  }

  ngOnInit(): void {

  }

  calcular(){
    for (let index = 0; index < this.expert.rating.length; index++) {
  
      this.rating_total = this.rating_total + this.expert.rating[index].rating;
    }
    this.rating_total= this.rating_total/this.expert.rating.length;
    console.log(this.rating_total);
  }
  getExpertProfile(id, user_id) {
    this.Expert.getExpertProfile(id, user_id).subscribe(
      (data: any) => {
        this.expert = data.Expert;
        console.log(this.expert);
        this.load=0;
        this.calcular();
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }

  favorite() {
    console.log("marcando como favorito");
    this.expert.favorite = true;
    this.Expert.Favorite(this.id).subscribe(
      (data: any) => {
        this.expert.favorite = data.favorite;
        console.log(this.expert);
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }
  contact() {
    this.Expert.Message(this.id, this.name, this.email, this.phone, this.message).subscribe(
      (data: any) => {
        this.name="";
        this.email="";
        this.phone="";
        this.message="";
        console.log(data);
        this.msj=true;
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }

}
