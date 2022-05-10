import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit, OnDestroy {
 sub = new Subscription();

  customers = []
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
      this.sub.add(
        this.userService.getCustomer().subscribe(
          data => this.customers = data.payload
        )
      )
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
