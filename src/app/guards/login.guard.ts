import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      let url : string= state.url
      console.log('Check login', this.checkLogin(url))
    return this.checkLogin(url);
  }

  checkLogin(url : string):boolean | UrlTree{
    console.log('Url request', url)
    let result : string | null = localStorage.getItem('userLoggedIn')
    console.log('result', localStorage.getItem('userLoggedIn'))
    if( result != null && result == 'true'){
        if(url == '/login'){
            return this.router.parseUrl('/login')
        }
        return true
    }else{
      return this.router.parseUrl('/login')
    }

  }

}
