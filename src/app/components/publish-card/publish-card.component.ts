import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';
import { isThisTypeNode } from 'typescript';
import { ProjectService } from './../../services/project/project.service';

@Component({
  selector: 'app-publish-card',
  templateUrl: './publish-card.component.html',
  styleUrls: ['./publish-card.component.scss'],
})
export class PublishCardComponent implements OnInit {
  @Input() type;
  @Input() data;
  baseUrl: string = environment.api;
  url:any;
  user: any;
  constructor(
    private service: ProjectService,
  ) {
    this.url= "profile/";
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    console.log(this.data);
    if(this.type==5){
      if (this.data) {
        this.data.photos = JSON.parse(this.data.cover_picture);
        console.log(this.data);
      }
    }else{
      if (this.data) {
        this.data.photos = JSON.parse(this.data.photos);
      }
    }
  }

  favorite(id, type) {
    console.log("marcando como favorito");
    console.log(id);
    console.log(type);
    this.data.favorite = true;
    this.service.favorite(id, type).subscribe(
      (data: any) => {
        this.data.favorite = data.favorite;
        console.log(data);
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }
}
