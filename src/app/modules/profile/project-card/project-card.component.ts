import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() data : any;
  constructor() { }
  photos: any;
  ngOnInit(): void {
    console.log(this.data);
    this.data.photos = JSON.parse(this.data.photos);
  }

}
