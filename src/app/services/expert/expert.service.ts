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

  getExpertProfile(id, user_id): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    formData.append('expert_profile_id', id);
    formData.append('user_id', user_id);
    return this.http.post(this.api + '/auth/services/show-expert', formData, {
      headers,
    });
  }

  AddRating(expert_id, observation, rating): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    formData.append('expert_profile_id', expert_id);
    formData.append('observation', observation);
    formData.append('rating', rating);
    return this.http.post(this.api + '/auth/services/user/rating', formData, {
      headers,
    });
  }

  Favorite(expert_id): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    formData.append('expert_profile_id', expert_id);
    return this.http.post(this.api + '/auth/services/favorite', formData, {
      headers,
    });
  }

  Message(expert_id, name, email, phone, message): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    formData.append('expert_profile_id', expert_id);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    return this.http.post(this.api + '/auth/services/contact', formData, {
      headers,
    });
  }

}
