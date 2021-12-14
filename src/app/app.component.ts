import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InteractionLoginService } from './services/interaction-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isVisibleSidebar = false
  title = 'Quiz app';
  isUserLoggedIn = false
  /**
   *
   */
  constructor(private interactionLogin : InteractionLoginService,
    private router : Router) {
  }
  ngOnInit(): void {
    console.log('isUserloggedin', this.isUserLoggedIn)
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn')== 'true' ? true : false
    this.interactionLogin.messLogin$.subscribe(
      (message:string) =>{
        console.log('Message login receive : ', message)
        this.isUserLoggedIn = message == 'true' ? true : false
        console.log('Is user login subcribe', this.isUserLoggedIn)
      }
    )
  }

  toggleSidebar(){
    this.isVisibleSidebar = !this.isVisibleSidebar
  }
  onLogout():void{
    console.log('on logout')
    localStorage.removeItem('isUserLoggedIn')
    this.interactionLogin.sendStateLogin('false')
    this.router.navigate(['login'])
  }
  onChangeLogin(){
    this.isUserLoggedIn = !this.isUserLoggedIn
  }
}
