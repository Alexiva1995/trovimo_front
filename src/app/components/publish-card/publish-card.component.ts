import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-publish-card',
  templateUrl: './publish-card.component.html',
  styleUrls: ['./publish-card.component.scss'],
})
export class PublishCardComponent implements OnInit {
  @Input() type;
  @Input() data;
  baseUrl: string = environment.api;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      this.data.photos = JSON.parse(this.data.photos);
      console.log(this.data);
    }
  }
}
