import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publish-card',
  templateUrl: './publish-card.component.html',
  styleUrls: ['./publish-card.component.scss']
})
export class PublishCardComponent implements OnInit {
  @Input() type;
  constructor() { }

  ngOnInit(): void {
    console.log(this.type)
  }

}
