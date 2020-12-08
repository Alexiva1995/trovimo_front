import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.api;
  constructor(private _http: HttpClient) { }

  signin(data) {
    return this._http.post(this.api+'/auth/login',data)
  }

  signup(data) {
    return this._http.post(this.api+'/auth/register',data)
  }

  alterlogin(data) {
    return this._http.post(this.api+'/auth/login-with-register',data)
  }
}
