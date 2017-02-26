import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { AdminComponent } from './admin/admin.component';
//import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
//commented out for async module loading
//import { CrisisModule } from './crisis-center/crisis.module';

//commented out for async module loading
//import { CrisisCenterRoutingModule } from './crisis-center/crisis-center-routing.module';

//commented out for async module loading
//import { AdminModule } from './admin/admin.module';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { DialogService } from './dialog.service';
import { AuthGuardService } from './admin/auth-guard.service';

import { Router } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  //  AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    //CrisisModule,
   // AdminModule,
   // CrisisCenterRoutingModule,
    //AdminRoutingModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    DialogService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
