import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, of, Subject } from 'rxjs';
import { DataService } from '../core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usermode: any;
  user: SocialUser = new SocialUser();
  userData = new Subject<any>();
  constructor(
    private dataService: DataService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) { }

  doFacebookLogin(usermode: any) {
    this.usermode = usermode ? 'admin' : 'user';
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.dataService.getUserRole(user, this.usermode).subscribe((data: any[]) => {
        const userData = Object.values(Object.values(data)[0]);
        sessionStorage.setItem('role', this.usermode);
        sessionStorage.setItem('name', user.firstName);
        this.userData.next(this.user);
      });
    });
  }

  sendFacebookLoginData(): Observable<any> {
    return this.userData.asObservable();
  }

  get getRole() {
    return sessionStorage.getItem('role');
  }

  get getName() {
    return sessionStorage.getItem('name');
  }

  clearCookie() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
