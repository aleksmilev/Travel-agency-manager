import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
    private encryptionKey: string = '2w7X9cR$#mP!zF5T@K&yH8eB';

    encrypt(data: any): string {
        data = JSON.stringify(data);

        let result = '';

        for (let i = 0; i < data.length; i++) {
            const charCode = data.charCodeAt(i) ^ this.encryptionKey.charCodeAt(i % this.encryptionKey.length);
            result += String.fromCharCode(charCode);
        }

        return btoa(result);
    }

    decrypt(encrypted_data: any): any {
        encrypted_data = atob(encrypted_data);

        let result = '';

        for (let i = 0; i < encrypted_data.length; i++) {
            const charCode = encrypted_data.charCodeAt(i) ^ this.encryptionKey.charCodeAt(i % this.encryptionKey.length);
            result += String.fromCharCode(charCode);
        }
        
        return JSON.parse(result);
    }

}
