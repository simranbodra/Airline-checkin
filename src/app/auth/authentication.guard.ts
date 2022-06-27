import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  //   if (this.cookieService.get('role') === 'user') {
  //     this.router.navigateByUrl('/home-screen');
  // } else if (this.cookieService.get('role') === 'admin') {
  //     this.router.navigateByUrl('/admin');
  // } else {
  //     return true;
  // }
  // return false;
  }
  
}
