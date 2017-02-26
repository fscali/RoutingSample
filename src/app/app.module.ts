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
import { CrisisModule } from './crisis-center/crisis.module';
import { CrisisCenterRoutingModule } from './crisis-center/crisis-center-routing.module';

import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { DialogService } from './dialog.service';

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
    CrisisModule,
    AdminModule,
    CrisisCenterRoutingModule,
    //AdminRoutingModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
