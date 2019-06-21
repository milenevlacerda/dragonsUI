import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLogged() {
    return !!localStorage.getItem('logged');
  }

  login(login) {
    if (login.email === 'dragons@ui.com' && login.pass === 'dragons') {
      localStorage.setItem('logged', 'true');
      return Promise.resolve();
    }

    return Promise.reject();
  }
}
