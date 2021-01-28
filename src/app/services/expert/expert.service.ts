import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  headers: HttpHeaders;
  private api = environment.api;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
  }

  getAreas(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(this.api + '/auth/show-areas', null, { headers });
  }

  getExpert(address, category, type, company, emergency): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    formData.append('address', address);
    formData.append('category', category);
    formData.append('type', type);
    formData.append('company_name', company);
    formData.append('availability', emergency);

    return this.http.post(this.api + '/auth/services/search-expert', formData, {
      headers,
    });
  }
}
