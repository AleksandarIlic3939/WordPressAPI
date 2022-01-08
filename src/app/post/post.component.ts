import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id!: string;
  postPosts: any;
  blogPosts: Blog[] = [];
  errorMessage: any;
  searchText: any = '';

  constructor(private _postService: PostService, private _blogService: BlogService) { }

  ngOnInit(): void {
    this.getPosts();
    this.getBlogs();
  }

  private getPosts() {

    this._postService.getPosts().subscribe(
      (data: any) => {
        this.postPosts = data;
        console.log(this.postPosts);
      },
      (error: any) => {
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      }
    );

  }

  private getBlogs() {
    this._blogService.getPosts().subscribe((data: any) => {
      this.blogPosts = data;
      console.log(data);
    });
  }

  public getBlog(id: number) {
    this._blogService.getPost(id).subscribe((data) => {
    alert(JSON.stringify(data));
    });
  }

  public createBlog(blog: Blog) {
    this._blogService.createPost(blog).subscribe((data) => {
    this.blogPosts.unshift(data);
    });
  }

  public deleteBlog(id: number) {
    this._blogService.deletePost(id).subscribe((data) => {
    this._removePostFromList(id);
    alert("Post je obrisan sa servera!");
    });
  }

  private _removePostFromList(id: number) {
    let ind = this.blogPosts.findIndex(post => post.id == id);
    this.blogPosts.splice(ind, 1);
  }

  public getDomain(link: any): string {
    return this._postService.domainHandler(link);
  }

  public getLink(): string {
    return this._postService.baseUrl;
  }

  shufflePosts() {
    let currentIndex = this.postPosts.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.postPosts[currentIndex], this.postPosts[randomIndex]] = [
        this.postPosts[randomIndex], this.postPosts[currentIndex]];
    }
  
    return this.postPosts;
  }

  shuffleBlogs() {
    let currentIndex = this.blogPosts.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.blogPosts[currentIndex], this.blogPosts[randomIndex]] = [
        this.blogPosts[randomIndex], this.blogPosts[currentIndex]];
    }
  
    return this.blogPosts;
  }

  shuffle() {
    this.shufflePosts();
    this.shuffleBlogs();
  }

}
