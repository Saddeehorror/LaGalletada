import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../modules/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }
  /**
   * Verifica si la sesión esta activa
   */
  canActivate(): boolean {
    console.log('guard');
    if (this.auth.isAuthenticated()) {
        this.router.navigateByUrl('/home');
    } else {
        return true
    }
  }

}
