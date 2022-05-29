import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { AuthService } from 'src/app/Services/auth.service';
import { PleskClientService } from 'src/app/Services/plesk-client.service';
import {UserInfo} from "../../Models/user.models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userProfi: UserInfo
  redirectToPlesk="";
  constructor(private route: ActivatedRoute,
    private authServ:AuthService) { }

  ngOnInit(): void {
  
      let data = this.route.snapshot.data;
      this.userProfi =  data['userInfos'] as UserInfo;
      this.redirectToPlesk=`https://devpro.expert:8443/login_up.php?login_name=${this.authServ.userName}&passwd=${this.authServ.password}`;
      

  }

}
