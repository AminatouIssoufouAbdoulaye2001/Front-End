import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Subscription} from "rxjs";
import {ProductserviceService} from "../../Services/productservice.service";

@Component({
  selector: 'app-subscribed-domain-details',
  templateUrl: './subscribed-domain-details.component.html',
  styleUrls: ['./subscribed-domain-details.component.scss']
})
export class SubscribedDomainDetailsComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  domains: [] = []

  constructor( private productService: ProductserviceService) { }

  ngOnInit(): void {
    this.sub.add(
      this.productService.getDomains()
        .pipe(
          map(res => res.payload)
        )
        .subscribe(
          data => this.domains = data
        )
    )
  }

  getDateFromTimestamp(timestamp: number) {
    let date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  convertPrice(price:number) {
    return Math.floor((price / 1000000) * 3.5);
  }
}
