import { BlogService } from './../../../services/blog/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogId: any;
  blog: any = undefined;
  error: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id');

    this.blogService.getBlogById( this.blogId ).subscribe((resp: any)=>{

      console.log( resp.data )
      this.blog = resp.data;

    },(error)=>{
      this.error = error;
    });

  }

}
