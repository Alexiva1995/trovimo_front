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
  errorMsg = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.blogService.getBlogs().subscribe(
      data => {
        this.blogsData = data;
      },
      error => {
        console.log( { ...error } )
      }
    );

  }

}
