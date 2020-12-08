import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-double-range',
  templateUrl: './double-range.component.html',
  styleUrls: ['./double-range.component.scss']
})
export class DoubleRangeComponent implements OnInit {
  @Input() min : number = 0;
  @Input() max : number = 100;
  @Input() steps: number = 4;
  @Output() min_value = new EventEmitter<number>();
  @Output() max_value = new EventEmitter<number>();
  default_min_value = this.min + 10;
  default_max_value = this.max - 10;
  constructor() { }

  ngOnInit(): void {
  }

  upperSliderChange() {
    if (this.default_max_value < (this.default_min_value + this.steps) && (this.default_min_value > this.min)) {
      this.default_min_value = this.default_max_value - this.steps;
      
      if (this.default_min_value === this.min) {
        this.default_max_value = this.steps;
      }
    }
  }

  lowerSliderChange() {
    if (this.default_min_value > this.default_max_value - this.steps && this.default_max_value < this.max) {
      this.default_max_value = this.default_min_value + this.steps;
      
      if (this.default_max_value == this.max) {
        this.default_min_value = this.max - this.steps;
      }
    }
  }
}
