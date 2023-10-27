import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { AuthGuard } from 'src/app/auth/auth.guard'; 

@Component({
	selector: 'app-empty-page',
	templateUrl: './empty-page.component.html',
	styleUrls: ['./empty-page.component.css']
})
export class EmptyPageComponent implements OnInit {

	// data: any = null;
	// hashed_data: any = null;
	// normal_data: any = null;

  	constructor(
		private auth: AuthGuard,
		private encryption: EncryptionService,
		private http: DataService,
		) {}

	ngOnInit(): void {

		
		// -Access check-
		// console.log(this.auth.access_check());

		// -Encription-
		// let data = {
		// 	'email': 'testmail@gmail.com',
		// 	'username': 'testuser',
		// 	'password': 'passw1234',
		// 	'role': 'anmin'
		// }
		// this.data = JSON.stringify(data);
		// this.hashed_data = this.encryption.encrypt(data);
		// this.normal_data = JSON.stringify(this.encryption.decrypt(this.hashed_data));


		// -API-
		// this.http.Get('test').subscribe(data => {
		// 	this.data = JSON.stringify(data);
		// });
		// this.http.Post('test', {"name": "test7"}).subscribe(data => {
		// 	this.data = JSON.stringify(data);
		// });
		// this.http.Update('test', {"id":"1","name": "test01"}).subscribe(data => {
		// 	this.data = JSON.stringify(data);
		// });
		// this.http.Delate('test', {id: 1}).subscribe(data => {
		// 	this.data = JSON.stringify(data);
		// });
  	}

	
}