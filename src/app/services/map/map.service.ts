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
    el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
    el.style.width = '32px';
    el.style.height = '40px';

    this.marker = new mapBox.Marker(el);
    this.marker.setLngLat([lng, lat]);
    this.marker.addTo(this.map);
    /* ON CLICK*/
    this.map.on('click', (e) => {
      /* Agrega el valor al input */
      document.getElementById('coordinates')["value"] =  e.lngLat.lng + ',' + e.lngLat.lat
      /* Agrega el punto en el mapa */
      this.marker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
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
  }
  getPointByCountry(): void {

  }
}
