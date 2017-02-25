import { NgModule } from '@angular/core';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'crisis-center', component: CrisisListComponent
  },
  /*{ 
    path: 'hero/:id', component: HeroDetailComponent
   },*/
  /*{
    path: 'heroes', component: HeroListComponent, data: { title: ' Heroes List' }
  },*/
  /*{
    path: 'admin', component: AdminComponent
  },*/
 /* {
    path: 'login', component: LoginComponent
  },*/
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
     path: '**', component: PageNotFoundComponent 
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
