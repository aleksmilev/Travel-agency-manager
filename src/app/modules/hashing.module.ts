import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class HashingModule {
	private security_key = '2w7X9cR$#mP!zF5T@K&yH8eB';

	encrypt_data(data: any): string {
		const stringify_data = JSON.stringify(data);
		return CryptoJS.AES.encrypt(stringify_data, this.security_key).toString();
	}

	decrypt_data(data: any): string {
		const stringify_data = JSON.stringify(data);
		return CryptoJS.AES.decrypt(stringify_data, this.security_key).toString(CryptoJS.enc.Utf8);
	}

}