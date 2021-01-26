import { BlogService } from './../../services/blog/blog.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogsData = undefined;
  searchValue = '';
  errorMsg = '';
  loading = true;
  topics = [];
  currentCategory = 0

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.geBlogs();
  }

  searchBlog( value: any ){
    this.loading = true;
    this.blogService.searchBlog( value ).subscribe( ( data )=>{
      this.blogsData = data;
      this.loading = !this.loading;
      this.searchValue = value;
    },
    error =>{
      console.log( { ...error } )
    })
  }


  geBlogs(): void{
    this.blogService.getBlogs().subscribe(
      data => {
        this.blogsData = data;
        this.loading = !this.loading;
      },
      error => {
        console.log( { ...error } )
      }
    );
  }

  clearSearchBlog( value: any ){
    if( value.length === 0 ){
      this.loading = true;
      this.blogsData = undefined;
      this.geBlogs();
    }
  }

  searchByCategory( category: any ){
    this.currentCategory = category

    if(category === 0){
      this.geBlogs();
      return;
    }
    this.blogsData = undefined;
    this.loading = true;

    this.blogService.searchByCategory( category) .subscribe(
      data =>{
        this.blogsData = data;
        this.loading = !this.loading;
      },
      error =>{
        console.log( { ...error } )
      }
    )

  }

}
