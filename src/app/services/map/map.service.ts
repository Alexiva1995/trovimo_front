import { Injectable } from '@angular/core';
import * as mapBox from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import {MapMouseEvent} from 'mapbox-gl';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: mapBox.Map;
  private marker: mapBox.Marker;
  private style = 'mapbox://styles/utrera1695/ckjyk9rsu2ryt17rwmng3psgh';
  constructor(private http: HttpClient) {}
  buildMap(zoom, lng, lat): void {
    this.map = new mapBox.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom,
      center: [lng, lat]
    });
    this.map.addControl(new mapBox.NavigationControl());
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url("/assets/images/untitled.svg")';
    el.style.width = '30px';
    el.style.height = '43px';

    this.marker = new mapBox.Marker(el);
    this.marker.setLngLat([lng, lat]);
    this.marker.addTo(this.map);
    /* ON CLICK*/
    this.map.on('click', (e) => {
      /* Agrega el punto en el mapa */
      this.marker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
      /* Agrega el valor al input */
      document.getElementById('ocultInfo')["value"] =  e.lngLat.lng + ',' + e.lngLat.lat;
      document.getElementById('coordinates')["value"] =  lng + ',' + lat;
    });
  }

  getLocationByCountry(country): any {
    const params = {
      access_token: environment.mapbox.geocodingAccessToken
    };
    return this.http.get(environment.mapbox.geocodingUrl + `${country}.json`);
  }
  changeCenterMap(lng, lat): void {
    this.marker.setLngLat([lng, lat]);
    this.map.flyTo({
      center: [lng, lat],
      essential: false
    });
    document.getElementById('ocultInfo')["value"] =  lng + ',' + lat;
    document.getElementById('coordinates')["value"] =  lng + ',' + lat;
  }
  getPointByCountry(): void {

  }
}
