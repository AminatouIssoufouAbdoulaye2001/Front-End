import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Subscription} from "rxjs";
import {ProductserviceService} from "../../Services/productservice.service";
import {Product} from "../../Models/produits";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  services: Product [] = [];

  constructor(
    private productService: ProductserviceService,
    private router: Router,
    private authService: AuthService
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

  goToDetail(id: number) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/paid', `${id}`])
    } else {
      this.router.navigate(['/account/sign-up'])
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
