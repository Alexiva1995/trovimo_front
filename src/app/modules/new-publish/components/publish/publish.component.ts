import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {OPTIONS} from './typeOptions';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @Output() setType = new EventEmitter<number>();
  idType = 1;
  idOption = 0;
  options = OPTIONS;
  constructor() {
  }

  ngOnInit(): void {
  }

  setAction(i: number): void {
    this.idType = i;
    this.idOption = 0;
    this.setType.emit(i);
  }
  selectOption(i: number): void {
    this.idOption = i;
  }

  isEnable(enable): boolean {
    return (enable.indexOf(this.idType) >= 0);
  }
}
