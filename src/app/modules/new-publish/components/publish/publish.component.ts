import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  first_action: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  setAction(i: number) {
    this.first_action = i;
  }
}
