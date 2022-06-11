import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {finalize, map, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {domainTypes} from "../../Models/domain-type.models";
import {RestApiService} from "../../Services/rest-api-service";
import {Domain} from "../../Models/domain.model";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";
import {ProductserviceService} from "../../Services/productservice.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.scss'],
  providers: [MessageService]
})
export class DomaineComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  searchForm: FormGroup;
  domainsTypes = domainTypes
  searchAvailableDomains: Domain[] = [];
  noAvailableDomains = false;
  waitingForSearchResult = false;
  paymentHandler: any = null;
  domain: Domain;

  constructor(
    private fb: FormBuilder,
    private service: RestApiService,
    private router: Router,
    private authService: AuthService,
    private productService: ProductserviceService,
    private messageService: MessageService,
  ) {

    // @ts-ignore
    let domain = this.router.getCurrentNavigation().extras.state;
    let domainName = '';
    let domainType = 'com';
    if (domain) {
      domainName = domain['domain'];
      domainType = domain['type'];
    }

    this.searchForm = fb.group({
      domain: fb.control(domainName, Validators.required),
      type: fb.control(domainType, Validators.required)
    })

    if (domain) {
      this.searchDomains();
    }
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.searchForm.invalid) {
      return;
    }
    this.searchDomains();
  }

  searchDomains() {
    let value = this.searchForm.value;
    let domain = value.domain;
    let domains: string[] = [];
    domainTypes.forEach(type => domains.push(`${domain}.${type}`));

    this.waitingForSearchResult = true
    this.sub.add(this.service.getAvailableDomain(domains)
      .pipe(
        finalize(() => {
          this.noAvailableDomains = true;
          this.waitingForSearchResult = false;
        }),
        map(domains => domains.filter(el => el.available))
      ).subscribe(
        domains => this.searchAvailableDomains = domains
      ));
  }


  makePayment(domain: Domain) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/account/sign-in'])
    } else {
      this.domain = domain;
      this.invokeStripe();

    }
  }

  purhaseDomain(domain: Domain) {
    this.sub.add(
      this.productService.purchaseDomain(domain)
        .subscribe(
          data => {
            this.messageService.add({
              severity: 'success',
              summary: 'Info',
              detail: 'Votre domaine a été enregistré',
              life: 3000
            });
          }
        )
    )
  }

  submitPayement() {
    let domain = this.domain;
    this.paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Kxi0sCcrQZu0kRNXpsSeSRDBrsgDoQiLhIbXUFPUz587o9x5AjRQsWpsQ5reKd3Kp7jTDW8YqkzjAYdeCaeOVGX00LuWb6JFR',
      locale: 'auto',
      token: (stripeToken: any) => this.purhaseDomain(domain)
    });
  }

  invokeStripe() {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => this.submitPayement()
      window.document.body.appendChild(script);
    this.paymentHandler.open({
      name: 'Paiement par carte',
      // description: '3 widgets',
      amount:  Math.floor(this.domain.price / 10000),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
