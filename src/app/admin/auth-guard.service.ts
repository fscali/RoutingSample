import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '../auth.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
     ){}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         console.log('Sono stato chiamato..');
         let url : string = state.url;
         return this.checkLogin(url);
     }
     canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
     }

     checkLogin(url: string): boolean {
         if (this.authService.isLoggedIn) { return true;}
         this.authService.redirectUrl = url;
         this.router.navigate(['/login']);
         return false;
     }
}