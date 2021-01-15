import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './login/auth.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
 
    constructor(private router:Router, private authService: AuthService ) {
 
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.authService.isAdminUser()) {
            alert('You are not allowed to view this page');
            return false;
        }
        return true;
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
        if (!this.authService.isUserLoggedIn()) {
            alert('You are not allowed to view this page. You are redirected to login Page');
            
            this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
            return false;
 
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        } 
 
        return true;
    }
 
}