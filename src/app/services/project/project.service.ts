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
    reqOpts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };

    reqOpts.params = new HttpParams();
    for (const k in params) {
      if (params[k] !== undefined) {
        reqOpts.params = reqOpts.params.append(k, params[k]);
      }
    }

    return this.http.post(
      this.api + '/auth/services/show-shared-space',
      reqOpts
    );
  }

  searchProject(filter?, reqOpts?: any): Observable<any> {
    reqOpts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };

    reqOpts.params = new HttpParams();
    for (const k in filter) {
      if (filter[k] !== undefined) {
        reqOpts.params = reqOpts.params.append(k, filter[k]);
      }
    }

    return this.http.post(
      this.api + '/auth/services/search-project',
      filter,
      reqOpts
    );
  }

  getProduct(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    return this.http.post(this.api + '/auth/services/search-product', null,{ headers});
  }
  getShared(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    return this.http.post(this.api + '/auth/services/search-shared-space', null,{ headers});
  }
  getProject(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    return this.http.post(this.api + '/auth/services/search-project', null,{ headers});
  }

  getAreas(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(this.api + '/auth/show-areas', null, { headers });
  }

  getExpert(address, area): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    formData.append('address', address);
    formData.append('area', area);
    return this.http.post(this.api + '/auth/services/search-expert', formData, {
      headers,
    });
  }
}
