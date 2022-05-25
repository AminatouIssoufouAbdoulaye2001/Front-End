import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, switchMap} from 'rxjs';
import {Product} from 'src/app/Models/produits';
import {ProductserviceService} from 'src/app/Services/productservice.service';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../Services/users.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy, AfterViewInit {
  paymentHandler: any = null;
  sub = new Subscription();
  products: Product[]
  username: string;

  constructor(
    private productService: ProductserviceService,
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {
  }

  makePayment() {
    let amount = 0;
    this.products.forEach(el => {
      amount += el.price;
    })

    this.paymentHandler.open({
      name: 'Paiement par carte',
      // description: '3 widgets',
      amount: Math.floor(amount / 3.5) * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => this.submitPayement()
      window.document.body.appendChild(script);
    }
  }

  ngAfterViewInit() {
    this.invokeStripe();
  }

  submitPayement() {
    let selectedProductsIds = this.products.map(
      (el: Product) => el.id
    ) as number[];
    this.paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Kxi0sCcrQZu0kRNXpsSeSRDBrsgDoQiLhIbXUFPUz587o9x5AjRQsWpsQ5reKd3Kp7jTDW8YqkzjAYdeCaeOVGX00LuWb6JFR',
      locale: 'auto',
      token: (stripeToken: any) => this.test(selectedProductsIds)
    });
  }

  test(selectedProductsIds: number[]) {
    this.sub.add(
      this.productService.subscribeToServices(selectedProductsIds)
        .subscribe(
          data => this.router.navigate(['/dashboard/client/subscribed-services'])
        )
    )
  }

  ngOnInit(): void {
    this.productService.getSelectedProducts()
      .subscribe(data => this.products = data)

    this.sub.add(
      this.userService.getUserInfos()
        .subscribe(res => {
          this.username = res.fullName;
        })
    )

    this.sub.add(
      this.route.params.pipe(
        switchMap(params => {
          return this.productService.getProduct(+params['id'])
        })
      ).subscribe(
        data => {
          this.products = this.productService.addSelectedProduct(
            data.payload as Product
          )
        }
      )
    )

  }

  deleteProduct(id: number) {
    this.products = this.productService.removeProduct(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
