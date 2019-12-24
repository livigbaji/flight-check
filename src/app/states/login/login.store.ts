import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Login } from './login.model';

export function createInitialState(): Login {
  return {
    email: '',
    password: '',
    success: false
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'login' })
export class LoginStore extends Store<Login> {
  constructor() {
    super(createInitialState());
  }
}