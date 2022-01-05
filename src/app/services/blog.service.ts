import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public baseUrl = 'https://www.wpbeginner.com/';

  constructor(private _httpClient: HttpClient) { }

  public getPosts() : Observable<Blog[]> {
    const url = `${this.baseUrl}/wp-json/wp/v2/posts`;
    console.log(url);
    return this._httpClient.get(url).pipe(catchError(this.errorHandler));
  }

  public getSinglePost(id: any) : Observable<Blog> {
    const url = `${this.baseUrl}/wp-json/wp/v2/posts/${id}`;
    console.log(url);
    return this._httpClient.get(url).pipe(catchError(this.errorHandler));
  }

  public deletePost(id: any) : Observable<Blog> {
    const url = `${this.baseUrl}/wp-json/wp/v2/posts/${id}`;
    console.log(url);
    return this._httpClient.delete(url).pipe(
      map((data: any) => this._createPostFromObject(data)),
    );
  }

  private _createPostFromObject(item: any) {
    return new Blog();
  }

  public errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    })
  }

  public domainHandler(link: any): string {
    try {
        const domainAndPath: string = link.split('//')[1];
        return domainAndPath.split('/')[0];
    } catch (err) {
        return "null";
    }
  }

}
