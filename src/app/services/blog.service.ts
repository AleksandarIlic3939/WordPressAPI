import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public baseUrl = 'http://localhost:3000/blogPosts';

  constructor(private _httpClient: HttpClient) { }

  public getPosts() : Observable<Blog[]> {
    return this._httpClient.get(this.baseUrl).pipe(map((data: any[]) => data.map((item: any) => this._createPostFromObject(item))),);
  }

  public getPost(id: number) : Observable<Blog> {
    return this._httpClient.get(this.baseUrl + '/' + id).pipe(
    map((data: any) => this._createPostFromObject(data)),
    );
  }

  public deletePost(id: number) : Observable<Blog> {
    return this._httpClient.delete(this.baseUrl + '/' + id).pipe(
    map((data: any) => this._createPostFromObject(data)),
    );
  }

  public createPost(blog: Blog) : Observable<Blog> {
    return this._httpClient.post(this.baseUrl, blog).pipe(
    map((data: any) => this._createPostFromObject(data)),
    );
  }

  private _createPostFromObject(item: any) {
    return new Blog(item.id, item.date, item.title, item.author, item.body);
  }

}
