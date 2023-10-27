import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModule } from './login.module';

@Injectable({
  	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  	constructor(
    	private router: Router,
		private login: LoginModule
    ) { }

  	canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let info = this.login.login_check();
		return info.type !== 'unlogin';
	}
}