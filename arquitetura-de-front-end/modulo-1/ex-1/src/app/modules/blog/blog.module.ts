import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    BlogComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ComponentsModule,
  ]
})
export class BlogModule { }
