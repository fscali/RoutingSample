import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanDeActivateGuard } from './can-deactivate-guard.service';

import { AuthGuardService } from './admin/auth-guard.service';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis.module#CrisisModule',
    data: {preload: true}
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategy }),
  ],
  exports: [RouterModule],
  providers: [
    CanDeActivateGuard,
    SelectivePreloadingStrategy
    ]

})
export class AppRoutingModule {

}
