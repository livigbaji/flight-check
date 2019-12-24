import { Injectable } from '@angular/core';
import { LoginStore } from '../states/login/login.store';
import { LoginQuery } from '../states/login/login.query';
import { Login } from '../states/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error$ = this.query.selectError();

  constructor(
    private store: LoginStore,
    private query: LoginQuery
  ) { }

  login({email, password}: Partial<Login>) {
    this.store.setError(null);
    if (email === 'demo' && password === 'demo') {
      this.store.update({
        email,
        password,
        success: true
      });
    } else {
      const errors = [
        ...[email !== 'demo' ? ['email'] : [] ],
        ...[password !== 'demo' ? ['password'] : [] ]
      ];
      this.store.setError(`incorrect ${errors.join(' and ')}`);
    }
    return this.query.isLoggedIn$;
  }

  logout() {

  }
}
