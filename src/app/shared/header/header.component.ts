import { Component, OnInit } from '@angular/core';
import { HEADER_CONSTS } from './header.constants';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navList: any;
  public userName: any;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    if (this.loginService.getRole === 'admin') {
      this.navList = HEADER_CONSTS.HEADER_CONSTS_ADMIN;
    } else if (this.loginService.getRole === 'user') {
      this.navList = HEADER_CONSTS.HEADER_NAV_LINKS;
    }
    this.userName = this.loginService.getName;
    this.userName = this.userName.charAt(0).toUpperCase() + this.userName.slice(1);
  }
  signOut() {
    this.loginService.clearCookie();
  }
}
