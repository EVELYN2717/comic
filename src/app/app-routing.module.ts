import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComicComponent } from './prueba-comic/prueba-comic.component';

const routes: Routes = [
  {path: 'comicPage', component: PruebaComicComponent},
  {path: '**', redirectTo: 'comicPage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
