import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { EncryptionService } from '../services/encryption.service';
import { DataService } from '../services/data.service';

@Injectable({
  	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  	constructor(
    	private router: Router,
    	private encryption: EncryptionService,
		private http: DataService,
    	) { }

  	canActivate(
    	next: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			return this.access_check(this.router.url.split('/')[1].toLowerCase());
		}
	

	access_check(routering: any){
		try {
			const info = localStorage.getItem('info');
			const role = this.encryption.decrypt(info).role.toLowerCase();
	  
			return this.http.Get('user_roles').pipe(map(data => {
			  	const tempData: any[] = data;
			  	const temp = tempData.find(item => item.id.toLowerCase() === role);
				
			  	if (temp) {
					const access = JSON.parse(temp.access);
					if (access.includes(routering)) {
					  return true;
					}
			  	}
			  
			  	return false;
			}));
		} catch (error) {
			return false;
		}
	}
}