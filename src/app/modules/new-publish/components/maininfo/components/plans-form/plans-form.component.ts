import {Component, Input, OnInit} from '@angular/core';
import {Plans} from '../../../../../../models/plans';

@Component({
  selector: 'app-plans-form',
  templateUrl: './plans-form.component.html',
  styleUrls: ['./plans-form.component.scss']
})
export class PlansFormComponent implements OnInit {
  @Input() plan: Plans;
  constructor() { }

  ngOnInit(): void {
  }

}
