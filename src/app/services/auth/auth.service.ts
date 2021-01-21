import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.api;
  constructor(private http: HttpClient) {

  }
  isLogged(): string {
    return localStorage.getItem('access_token');
  }
  logout(): void {
    localStorage.removeItem('access_token')
  }
  /*  */
  signIn(data): Observable<any> {
    return this.http.post(this.api + '/auth/login', data);
  }

  signUp(data): Observable<any> {
    return this.http.post(this.api + '/auth/register', data);
  }

  alterLogin(data): Observable<any> {
    return this.http.post(this.api + '/auth/login-with-register', data);
  }
}
