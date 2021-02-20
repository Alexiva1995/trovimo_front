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

  showProjects(params?: any, reqOpts: any = []): Observable<any> {
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

  searchProject(filter?, reqOpts: any = []): Observable<any> {
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

  searchProduct(type, user_id, address, min, max, rooms, baths, areamin, areamax,furnished,category,
    condition,pieces,parking,operation,ListedBy,order,tour,yearmin,yearmax,buildsTemp,home_detailsTemp): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
  
    console.log("min" , min, "max" , max)


    const formData = new FormData();
    formData.append('type', type);
    formData.append('user_id', user_id);
    formData.append('address', address);
    formData.append('pricemin', min);
    formData.append('pricemax', max);
    formData.append('room', rooms);
    formData.append('bath', baths);
    formData.append('areamin', areamin);
    formData.append('areamax', areamax);
    formData.append('furnished', furnished);
    for (var i = 0; i < category.length; i++) {
      formData.append('category[]', category[i]);
  }
   formData.append('condition', condition);
    formData.append('pieces', pieces);
    formData.append('parking', parking);
    formData.append('operation', operation);
    formData.append('listedby', ListedBy);
    formData.append('order', order);
    formData.append('tour', tour);
    formData.append('yearmin', yearmin);
    formData.append('yearmax', yearmax);
    for (var i = 0; i < buildsTemp.length; i++) {
      formData.append('building_details[]', buildsTemp[i]);
  }
    for (var i = 0; i < home_detailsTemp.length; i++) {
      formData.append('home_details[]', home_detailsTemp[i]);
  }



     return this.http.post(this.api + '/auth/services/search-product', formData, {
      headers,
    });
  }
  favorite(id, type): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    if(type==1){
      formData.append('product_id', id);
    }
    if(type==2){ 
        formData.append('product_id', id);
    } 
    if(type==3){ 
        formData.append('shared_space_id', id); 
    } 
    if(type==4){ 
        formData.append('project_id', id);
     }
    return this.http.post(this.api + '/auth/services/favorite', formData, {
      headers,
    });
  }

  getOptions(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });

    return this.http.get(this.api + '/auth/services/optional-options',{
      headers,
    });
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

  getSharedSpace(filter, reqOpts: any = []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    reqOpts.params = new HttpParams();
    for (const k in filter) {
      if (filter[k] !== undefined) {
        formData.append(k, filter[k]);
      }
    }
    return this.http.post(
      this.api + '/auth/services/search-shared-space',
      formData,
      {
        headers,
      }
    );
  }
  searchProducts(filter, reqOpts: any = []) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      Accept: 'application/json',
    });
    const formData = new FormData();
    if (filter) {
      reqOpts.params = new HttpParams();
      for (const k in filter) {
        if (filter[k] !== undefined) {
          formData.append(k, filter[k]);
        }
      }
    }
    return this.http.post(
      this.api + '/auth/services/search-product',
      formData,
      {
        headers,
      }
    );
  }
}
