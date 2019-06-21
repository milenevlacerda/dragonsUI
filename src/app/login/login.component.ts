import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.loginService.isLogged()) {
      this.router.navigate(['']);
    }
  }

  submit(form) {
    this.loginService.login(form.value)
      .then(() => {
        this.router.navigate([''])
      })
      .catch(() => {
        this.error = 'Erro ao efetu...';
      })
  }

}
