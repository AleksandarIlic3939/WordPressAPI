import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { BlogService } from './services/blog.service';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './helpers/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SinglePostComponent,
    AddBlogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PostService, BlogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
