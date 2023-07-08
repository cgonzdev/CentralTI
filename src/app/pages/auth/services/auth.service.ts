import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { AccountEmailAndPassword } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(user: AccountEmailAndPassword) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  register(user: AccountEmailAndPassword) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  logout() {
    return signOut(this.auth);
  }
}
