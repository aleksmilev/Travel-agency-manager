import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/modules/data.service';

@Component({
	selector: 'app-empty-page',
	templateUrl: './empty-page.component.html',
	styleUrls: ['./empty-page.component.css']
})
export class EmptyPageComponent implements OnInit {

  	constructor(private http: DataService) {}

	ngOnInit(): void {
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