import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  headers: HttpHeaders;
  private api = environment.api;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
  }
  uploadImage(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {
      headers,
    });
  }
  uploadVideo(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {
      headers,
    });
  }
  createProject(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {
      headers,
    });
  }
  saveDetailInfo(data, typeName): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(this.api + '/auth/services/' + typeName, data, {
      headers,
    });
  }

  showProjects(params?: any, reqOpts?: any): Observable<any> {
    // Modelo de params
    let dummy = {
      shared_space_id: 1,
    };
    //Id de ejemplo para que traiga data
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });

    return this.http.post(
      this.api + '/auth/services/show-shared-space',
      params || dummy,
      { headers }
    );
  }

  searchProject(filter, reqOpts?: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });

    reqOpts.params = new HttpParams();
    for (const k in filter) {
      if (filter[k] !== undefined) {
        reqOpts.params = reqOpts.params.append(k, filter[k]);
      }
    }
    return this.http.post(this.api + '/auth/services/search-project', {
      headers,
    });
  }
}
