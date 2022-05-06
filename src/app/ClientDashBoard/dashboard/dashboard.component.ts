import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserInfo} from "../../Models/user.models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userProfi: UserInfo

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      let data = this.route.snapshot.data;
      this.userProfi =  data['userInfos'] as UserInfo;
  }

}
