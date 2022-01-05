import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  id!: string;
  singlePost: any;
  errorMessage: any;

  constructor(private _route: ActivatedRoute, private _blogService: BlogService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id') as string;
    console.log(this.id);
    this.getSinglePost();
  }

  private getSinglePost() {

    this._blogService.getSinglePost(this.id).subscribe(
      (data: any) => {
        this.singlePost = data;
        console.log(this.singlePost);
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
