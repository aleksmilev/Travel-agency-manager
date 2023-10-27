import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';
import { EncryptionService } from '../services/encryption.service';

@NgModule({
  	declarations: [],
  	imports: [
    	CommonModule
  	]
})

export class LoginModule {
	
	constructor(
		private http: DataService,
		private cookieService: CookieService,
		private encryption: EncryptionService
  	){}

	async client_check(email: string, password: string){
		const observable = this.http.Get('clients');
		let user = undefined;

		try {
		  	const data : any[] = await observable.toPromise();
			user = data.find(user => user.email === email && user.password === password)
		} catch (error) {
			return false;
		}

		if(user != undefined){
			console.log(JSON.stringify(user));
			this.cookieService.set('info', this.encryption.encrypt(user));
			return true;
		}else{
			return false;
		}
	}

	async user_check(email: string, password: string){
		const observable = this.http.Get('users');
		let user = undefined;

		try {
		  	const data : any[] = await observable.toPromise();
			user = data.find(user => user.email === email && user.password === password)
		} catch (error) {
			return false;
		}

		if(user != undefined){
			console.log(JSON.stringify(user));
			this.cookieService.set('info', this.encryption.encrypt(user));
			return true;
		}else{
			return false;
		}
	}

	login_check(): any{
		let info = this.encryption.decrypt(this.cookieService.get('info'));

		console.log(this.encryption.decrypt(info));

		if(info != ''){
			return {
				type: 'unlogin',
				info: {}
			};
		}

		if(info.hasOwnProperty('role')){
			return {
				type: 'user',
				info: info
			};
		}else{
			return {
				type: 'client',
				info: info
			};
		}
		
	}
}
