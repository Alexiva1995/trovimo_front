import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-maininfo',
  templateUrl: './maininfo.component.html',
  styleUrls: ['./maininfo.component.scss']
})
export class MaininfoComponent implements OnInit {
  @Input() type;
  years = [];

  plans = [{}];
  typesp = [{}];
  constructor() { }

  ngOnInit(): void {
    this.getYearBuilt();
  }
  getYearBuilt(): any {
    const actualYear = new Date().getFullYear();
    for (let i = 0; i < 100; i++) {
      this.years[i] = actualYear - i;
    }
  }
}
