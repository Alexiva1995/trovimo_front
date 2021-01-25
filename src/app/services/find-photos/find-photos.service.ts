import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindPhotosService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  getPhotos( searchValues: object ): any {

    let searchParams = new HttpParams();

    for (const value in searchValues) {

      if (searchValues[value].length !== 0) {

        searchParams.append( value, searchValues[value] );

      }

    }

    return this.http.get( this.api + '/reels/search', { params: searchParams } );

  }

}
