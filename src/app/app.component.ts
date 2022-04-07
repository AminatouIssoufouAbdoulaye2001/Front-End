import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor() { }
  ngOnInit(): void {
    AOS.init();
   
    }

  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }
}

