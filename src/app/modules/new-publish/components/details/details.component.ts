import {Component, Input, OnInit} from '@angular/core';
import {HOME_DETAILS_OPTIONS} from './checkoptions';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  @Input() type;
  homeDetails = HOME_DETAILS_OPTIONS;
  constructor() { }

  ngOnInit(): void {
  }

}
