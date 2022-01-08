import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'posts/:id', component: SinglePostComponent},
  { path: 'add-blog', component: AddBlogComponent },
  { path: '**', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
