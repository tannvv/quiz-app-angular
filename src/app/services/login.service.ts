import { InteractionLoginService } from './interaction-login.service';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router: Router,
    private interactionLogin: InteractionLoginService
  ) {}
  login(email: string, password: string): boolean {
    if (email == 'admin' && password == 'admin') {
      localStorage.setItem('userLoggedIn', 'true');
      this.router.navigate(['manage-question']);
      this.interactionLogin.sendStateLogin('true')
      return true;
    }
    return false;
  }
  logout(): void {
    localStorage.removeItem('userLoggedIn');
    this.interactionLogin.sendStateLogin('false')
    this.router.navigate(['login']);
  }
}
