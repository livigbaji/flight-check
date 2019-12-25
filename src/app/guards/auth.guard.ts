import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginQuery } from '../states/login/login.query';
import { tap } from 'rxjs/operators';
import { CityService } from '../services/city.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginQuery: LoginQuery,
    private router: Router,
    private cityService: CityService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginQuery.isLoggedIn$.pipe(
        tap(isLoggedIn => {
          if (!isLoggedIn) {
            this.router.navigate(['/', 'login']);
          } else {
            this.cityService.init();
          }
        })
      );
  }
}
