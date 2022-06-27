import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentToggleValue: any;
  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.sendFacebookLoginData().subscribe((userData) => {
      if(userData) {
        if (this.loginService.getRole === 'admin') {
          this.router.navigateByUrl('/admin');
        } else if (this.loginService.getRole === 'user') {
          this.router.navigateByUrl('/home');
        } else {
          this.router.navigateByUrl('/login');
        }
      }
    });
   }

  ngOnInit() {
  }

  register() {
    this.loginService.doFacebookLogin(this.currentToggleValue);
  }

  toggleState(event: any) {
    this.currentToggleValue = !this.currentToggleValue;
  }

  displayToggleState(value: boolean) {
    return value ? 'Admin' : 'User';
  }
}
