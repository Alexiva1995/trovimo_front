import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {OPTIONS} from '../../../../models/typeOptions';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @Output() setType = new EventEmitter<number>();
  @Output() setOption = new EventEmitter<number>();
  @Input() idType = 1;
  @Input() idOption = 0;
  options = OPTIONS;
  constructor() {
  }

  ngOnInit(): void {
  }

  setAction(i: number): void {
    this.idType = i;
    this.idOption = 0;
    this.setType.emit(i);
    this.setOption.emit(0);
  }
  selectOption(i: number): void {
    this.idOption = i;
    this.setOption.emit(i);
  }

  isEnable(enable): boolean {
    return (enable.indexOf(this.idType) >= 0);
  }
}
