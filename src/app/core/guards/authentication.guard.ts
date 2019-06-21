import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  canActivate() {
    if (this.loginService.isLogged()) {
      return true
    }

    this.router.navigate(['login']);
    return false;
  }
}
