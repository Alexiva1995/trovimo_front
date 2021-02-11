import {Component, Input, OnInit} from '@angular/core';
import {MapService} from '../../services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() lng;
  @Input() lat;

  zoom = 9;
  constructor() { }

  

  ngOnInit(): void {
   
  }

}
