import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup } from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	constructor(
		private http: DataService,
		private cookieService: CookieService,
		private encryption: EncryptionService
  	){}

	login = new FormGroup({
		email: new FormControl(),
		password: new FormControl()
	});

}
