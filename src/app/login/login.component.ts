import { Route, Router } from '@angular/router';
import { InteractionLoginService } from './../services/interaction-login.service';
import { MessageService } from 'primeng/api';
import { LoginService } from './../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [MessageService]
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm : FormGroup = {} as FormGroup
  /**
   *
   */
  constructor(private loginService:LoginService,
    private messageService:MessageService,
    private interactionLogin : InteractionLoginService,
    private router : Router) {

  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit():void {
    let email : string = this.loginForm.controls.email.value
    let password : string = this.loginForm.controls.password.value
    if(this.loginService.login(email,password)){
        this.interactionLogin.sendStateLogin('true')
        this.router.navigateByUrl('/manage-question')
    }else{
      this.messageService.add({
        severity : 'error',
        summary : 'Try again',
        detail : 'Incorrect email or password'
      })
    }
  }
}
