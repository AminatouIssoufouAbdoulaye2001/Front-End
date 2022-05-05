import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 showProfil = true;
  constructor() { }

  ngOnInit(): void {
  }

  showProfile() {
    this.showProfil = true;
  }

  showSecurity() {
    this.showProfil = false;
  }
}
