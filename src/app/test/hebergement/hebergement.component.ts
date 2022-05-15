import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Subscription} from "rxjs";
import {ProductserviceService} from "../../Services/productservice.service";
import {Product} from "../../Models/produits";

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  services: Product [] = [];

  constructor(
    private productService: ProductserviceService
  ) {
  }

  ngOnInit(): void {
    this.sub.add(
      this.productService.getProducts()
        .pipe(
          map(res => res.payload),
        )
        .subscribe(
          products => this.services = products
        )
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
