import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-double-range',
  templateUrl: './double-range.component.html',
  styleUrls: ['./double-range.component.scss'],
})
export class DoubleRangeComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() steps: number;
  @Output() setValue = new EventEmitter<any>();

  value: any;
  highValue: any;
  options: Options;
  constructor() {}

  ngOnInit(): void {
    this.value = this.min + this.steps;
    this.highValue = this.max - this.steps;
    this.options = {
      floor: this.min,
      ceil: this.max,
      step: this.steps,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>Min</b>' + value;
          case LabelType.High:
            return '<b>Max</b>' + value;
          default:
            return '' + value;
        }
      },
    };
  }
  show() {
    console.log(this.min +'-'+ this.value +'-'+this.highValue);

    this.setValue.emit({ min: this.value, max: this.highValue });
  }
}
