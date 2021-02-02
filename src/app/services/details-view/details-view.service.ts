import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsViewService {
  headers: HttpHeaders;
  private api = environment.api;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
  }
  Contact(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {
      headers,
    });
  }
  
  Favorite(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {
      headers,
    });
  }

  Show(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {
      headers,
    });
  }
  
}
