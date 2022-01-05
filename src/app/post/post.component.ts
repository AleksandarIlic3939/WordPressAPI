import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id!: string;
  blogPosts: any;
  errorMessage: any;

  constructor(private _blogService: BlogService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {

    this._blogService.getPosts().subscribe(
      (data: any) => {
        this.blogPosts = data;
        console.log(this.blogPosts);
      },
      (error: any) => {
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );

  }

  public getDomain(link: any): string {
    return this._blogService.domainHandler(link);
  }

  public getLink(): string {
    return this._blogService.baseUrl;
  }

}
