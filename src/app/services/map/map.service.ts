import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Coordinates } from 'src/app/models/coordinates.model';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  private messageSource = new BehaviorSubject<Coordinates>({latitude:0, longitude: 0});
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { 
    
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }

  changeCoordinates(latLng: Coordinates) {
    this.messageSource.next(latLng);
  }


}