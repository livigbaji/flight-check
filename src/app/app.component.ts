import { Component } from '@angular/core';
import { LoginQuery } from './states/login/login.query';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn$ = this.loginQuery.isLoggedIn$;
  constructor(
    private loginQuery: LoginQuery,
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/', 'login']);
  }
}
