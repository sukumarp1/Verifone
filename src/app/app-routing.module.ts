import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from  '../app/components/search/search.component';
import {FavoriteComponent} from '../app/components/favorite/favorite.component';

const routes: Routes = [
 { path: '',pathMatch: 'full',component: SearchComponent},
 { path: 'favorite',pathMatch: 'full',component: FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
