import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './components/search-page/search-page.component';
import { SingleLandPageComponent } from './components/single-land-page/single-land-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'land/:id', component: SingleLandPageComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
