import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./modules/sobre/sobre.module').then(m => m.SobreModule)
  },
  {
    path: 'descricao',
    loadChildren: () => import('./modules/descricao/descricao.module').then(m => m.DescricaoModule)
  },
  {
    path: 'posts/:id',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
