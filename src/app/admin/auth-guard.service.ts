import { Injectable } from '@angular/core';
import { CanActivate,
     CanActivateChild, 
     CanLoad,
     ActivatedRouteSnapshot, 
     RouterStateSnapshot,
      Router,
      Route,
    NavigationExtras } from '@angular/router';

import { AuthService } from '../auth.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

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

     canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return this.checkLogin(url);
     }

     checkLogin(url: string): boolean {
         if (this.authService.isLoggedIn) { return true;}
         this.authService.redirectUrl = url;
         let sessionId = 123456789;
         let navigationExtras: NavigationExtras = {
            queryParams: {'session_id': sessionId},
            fragment: 'anchor'
         };
         this.router.navigate(['/login'],navigationExtras);
         return false;
     }
}