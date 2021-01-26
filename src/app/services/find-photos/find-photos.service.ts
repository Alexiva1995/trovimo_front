import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindPhotosService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  getPhotos( searchValues: any ): any {

    return this.http.get( this.api + '/users_experiences?title=' + searchValues.title );

  }

}
