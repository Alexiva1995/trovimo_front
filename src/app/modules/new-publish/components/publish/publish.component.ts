import {Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @Output() setType = new EventEmitter<number>();
  first_action = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  setAction(i: number) {
    this.first_action = i;
    this.setType.emit(i);
  }
}
