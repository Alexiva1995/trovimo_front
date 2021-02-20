import { Component, Input, OnInit } from '@angular/core';
import { MapService } from '../../services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() lng;
  @Input() lat;
  @Input() zoom;

  //zoom = 9;
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

  addMarker(latitude: number, longitude: number) {
    this.lat = latitude;
    this.lng = longitude;
    this.mapService.changeCoordinates({latitude: this.lat, longitude: this.lng})

  }

}
