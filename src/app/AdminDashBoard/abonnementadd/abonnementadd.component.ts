import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Subscription} from "rxjs";
import {ProductserviceService} from "../../Services/productservice.service";

@Component({
  selector: 'app-abonnementadd',
  templateUrl: './abonnementadd.component.html',
  styleUrls: ['./abonnementadd.component.scss']
})
export class AbonnementaddComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  subscriptions: [] = []
  constructor(private productService: ProductserviceService) { }

  ngOnInit(): void {
    this.sub.add(
      this.productService.getSubsciptions()
        .pipe(
          map(res => res.payload)
        )
        .subscribe(
          data => this.subscriptions = data
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
}
