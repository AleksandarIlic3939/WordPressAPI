import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  public blogForm: FormGroup;

  public blogPosts: Blog[] = [];

  constructor(private _postService: PostService, private _blogService: BlogService) {
    this._postService.getPosts().subscribe((data) => {
      this.blogPosts = data;
    });

    this._blogService.getPosts().subscribe((data) => {
      this.blogPosts = data;
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.blogForm = new FormGroup({
      'id': new FormControl(1, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      'title': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'author': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'body': new FormControl(null, [Validators.required, Validators.minLength(100)])
    });
  }

  public submitForm() {
    let id = this.blogForm.get('id').value;
    let date = new Date();
    let title = this.blogForm.get('title').value;
    let author = this.blogForm.get('author').value;
    let body = this.blogForm.get('body').value;

    let blog = new Blog(id, date, title, author, body);
    this.createBlog(blog);

    alert('Uspesno ste dodali blog!\n\n' + JSON.stringify(blog));
    window.location.replace('./posts');
  }

  public createBlog(blog: Blog) {
    this._blogService.createPost(blog).subscribe((data) => {
      this.blogPosts.unshift(data);
    })
  }

  get id() {
    return this.blogForm.get('id');
  }

  get title() {
    return this.blogForm.get('title');
  }

  get author() {
    return this.blogForm.get('author');
  }

  get body() {
    return this.blogForm.get('body');
  }

}
