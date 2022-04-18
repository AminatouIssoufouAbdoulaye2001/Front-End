import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private _router: Router) {

}

  ngOnInit(): void {

  }

  logout() {
    this.authService.logOut();
    this._router.navigate(['']);
  }

}
