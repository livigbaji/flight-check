
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Login } from './login.model';
import { LoginStore } from './login.store';


@Injectable({
  providedIn: 'root'
})
export class LoginQuery extends Query<Login> {

  isLoggedIn$ = this.select(state => state.success);

  error$ = this.selectError();

  constructor(protected store: LoginStore) {
    super(store);
  }
}