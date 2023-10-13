import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncryptionService } from '../services/encryption.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardUser implements CanActivate {

  constructor(
    private router: Router,
    private encryption: EncryptionService
    ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      try {
        const info = localStorage.getItem('info');
        const role = this.encryption.decrypt(info).role;

        return role === "user";
    } catch (error) {
        return false;
    }
  }
}