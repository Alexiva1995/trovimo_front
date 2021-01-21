import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.scss']
})
export class NumberSelectorComponent implements OnInit {
  @Output() setValue = new EventEmitter<number>();
  value = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  plus(): void {
    this.value += 1;
    this.setValue.emit(this.value);
  }

  minus(): void {
    if (this.value > 0) {
      this.value -= 1;
      this.setValue.emit(this.value);
    }
  }
}
