import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/Models/user.models';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  userProfi: UserInfo

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      let data = this.route.snapshot.data;
      this.userProfi =  data['userInfos'] as UserInfo;
  }
}
