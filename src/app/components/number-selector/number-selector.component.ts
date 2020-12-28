import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.scss']
})
export class NumberSelectorComponent implements OnInit {
  value = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  plus(): void {
    this.value += this.value;
  }

  minus(): void {
    this.value -= this.value;
  }
}
