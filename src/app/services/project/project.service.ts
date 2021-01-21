import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  headers: HttpHeaders;
  private api = environment.api;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
  }
  uploadImage(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {headers});
  }
  uploadVideo(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {headers});
  }
  createProject(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {headers});
  }
  saveDetailInfo(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {headers});
  };
}
