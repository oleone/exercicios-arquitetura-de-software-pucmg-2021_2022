import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostItemListComponent } from './post-item-list/post-item-list.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    NavbarComponent,
    PostItemListComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ContentComponent,
    HeaderComponent,
    NavbarComponent,
    PostItemListComponent,
  ]
})
export class ComponentsModule { }
