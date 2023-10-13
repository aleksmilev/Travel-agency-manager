import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
	selector: 'app-empty-page',
	templateUrl: './empty-page.component.html',
	styleUrls: ['./empty-page.component.css']
})
export class EmptyPageComponent implements OnInit {

	hashed_data: any = null;
	normal_data: any = null;

  	constructor(
		private http: DataService,
		private encryption: EncryptionService
		) {}

	ngOnInit(): void {
		let data = {
			'email': 'testmail@gmail.com',
			'username': 'testuser',
			'password': 'passw1234',
			'role': 'anmin'
		}

		// this.hashed_data = this.hash.encrypt_data(data);
		// localStorage.setItem("info", this.hashed_data);

		// this.normal_data = this.hash.decrypt_data(this.hashed_data);


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