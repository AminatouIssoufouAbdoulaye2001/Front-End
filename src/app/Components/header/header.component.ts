import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dashboardLink = ''
  isAuthenticate = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthenticate = this.authService.isAuthenticated()
    if (this.isAuthenticate) {
      let role = this.authService.getRole()

      if (role === 'ROLE_ADMIN') {
        this.dashboardLink = '/dashboard/admin'
      }

      if (role === 'ROLE_CLIENT') {
        this.dashboardLink = '/dashboard/client'
      }
    } else {
      this.dashboardLink = '/account'
    }

  }

}
