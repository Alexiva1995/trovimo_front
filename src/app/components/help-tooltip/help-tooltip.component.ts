import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-help-tooltip',
  templateUrl: './help-tooltip.component.html',
  styleUrls: ['./help-tooltip.component.scss']
})
export class HelpTooltipComponent implements OnInit {
  @Input() text = '';
  constructor() { }

  ngOnInit(): void {
  }

}
