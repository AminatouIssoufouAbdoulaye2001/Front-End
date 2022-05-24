import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Subscription} from "rxjs";
import { RestApiService } from 'src/app/Services/rest-api-service';

@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.scss']
})
export class SecuriteComponent implements OnInit {

  // sub = new Subscription();
  // subscriptions: [] = []
  // constructor(private domainService: RestApiService) { }

  ngOnInit():void{
  //   this.sub.add(
  //     this.domainService.getSubsciptions()
  //       .pipe(
  //         map(res => res.payload)
  //       )
  //       .subscribe(
  //         data => this.subscriptions = data
  //       )
  //   )
  }
  // getDateFromTimestamp(timestamp: number) {
  //   let date = new Date(timestamp);
  //   return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  // }
 
}
