import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../Models/produits";
import {map, Subscription} from "rxjs";
import {ProductserviceService} from "../../Services/productservice.service";

@Component({
  selector: 'app-purchase-services-details',
  templateUrl: './purchase-services-details.component.html',
  styleUrls: ['./purchase-services-details.component.scss']
})
export class PurchaseServicesDetailsComponent implements OnInit, OnDestroy {
  sub = new Subscription()
  products: Product[] = [];

  constructor(private productService: ProductserviceService) {

  }

  ngOnInit(): void {
    this.sub.add(
      this.productService.getsubscribeToServices()
        .pipe(
          map(res => res.payload)
        )
        .subscribe(products => this.products = products)
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
