import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

import { AuthGuardService } from './auth-guard.service';

@NgModule({
    imports:[
        RouterModule,
        HttpModule,
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        ManageHeroesComponent,
        ManageCrisesComponent,
        AdminDashBoardComponent
    ],
    providers: [
       // AuthGuardService //moved in main app module for lazy loading
    ]
})
export class AdminModule {

}
