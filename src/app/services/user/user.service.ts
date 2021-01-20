import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = environment.api;
  constructor(private _http: HttpClient) {}

  getUser() {
    let reqOpts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      }),
    };
    return this._http.post(this.api + '/auth/login', reqOpts);
  }

  updateProfile(params, reqOpts?: any) {
    reqOpts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      }),
    };

    reqOpts.params = new HttpParams();
    for (const k in params) {
      if (params[k] !== undefined) {
        reqOpts.params = reqOpts.params.append(k, params[k]);
      }
    }
    return this._http.post(this.api + '/auth/login', reqOpts);
  }
}
