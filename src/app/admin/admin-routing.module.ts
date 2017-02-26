import { RouterModule, Router, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

import { AuthGuardService } from './auth-guard.service';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuardService],
                children: [
                    {
                        path: 'manage-crises',
                        component: ManageCrisesComponent
                    },
                    {
                        path: 'manage-heroes',
                        component: ManageHeroesComponent
                    },
                    {
                        path: '',
                        component: AdminDashBoardComponent
                    }

                ]

            }]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {

}
