import { Component, OnInit } from '@angular/core';
import {OPTIONS} from '../../models/typeOptions';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  min = 0;
  max = 10;
  steps = 2;
  options = OPTIONS;
  showFilter = false;
  activeFilter = 0;
  type = 1;
  constructor() { }

  ngOnInit(): void {
  }
  setType(i): void {
    this.type = i;
  }
  isEnable(enable): boolean {
    return (enable.indexOf(this.type) >= 0);
  }
}
