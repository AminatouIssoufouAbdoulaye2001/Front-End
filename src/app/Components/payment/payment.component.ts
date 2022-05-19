import {Component,OnDestroy,OnInit} from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Product } from 'src/app/Models/produits';
import { ProductserviceService } from 'src/app/Services/productservice.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy  {
  paymentHandler: any = null;
  constructor(private productService: ProductserviceService) {}
 
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Kxi0sCcrQZu0kRNXpsSeSRDBrsgDoQiLhIbXUFPUz587o9x5AjRQsWpsQ5reKd3Kp7jTDW8YqkzjAYdeCaeOVGX00LuWb6JFR',
     // locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Paiement par carte',
      // description: '3 widgets',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Kxi0sCcrQZu0kRNXpsSeSRDBrsgDoQiLhIbXUFPUz587o9x5AjRQsWpsQ5reKd3Kp7jTDW8YqkzjAYdeCaeOVGX00LuWb6JFR',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
  sub = new Subscription();
  services: Product [] = [];

 

  ngOnInit(): void {
    this.sub.add(
      this.productService.getProducts()
        .pipe(
          map((res: { payload: any; }) => res.payload),
        )
        .subscribe(
          products => this.services = products
        )
    )
    this.invokeStripe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
