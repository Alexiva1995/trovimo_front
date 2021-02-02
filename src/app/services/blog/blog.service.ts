import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  getBlogs(){

    return this.http.get( this.api + '/blogs' );

  }


  getBlogById(id: any){

    return this.http.get( this.api + '/blogs/' + id );

  }

  searchBlog( value: any ){

    return this.http.get( this.api + `/blogs?title=${ value }&content=${ value }`);

  }

  searchByCategory( value ){
    return this.http.get( this.api   + `/blogs/?category_id=${ value }`);
  }

}
