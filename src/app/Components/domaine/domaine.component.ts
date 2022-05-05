import {Component, OnDestroy, OnInit} from '@angular/core';
import {finalize, map, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {domainTypes} from "../../Models/domain-type.models";
import {RestApiService} from "../../Services/rest-api-service";
import {Domain} from "../../Models/domain.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.scss']
})
export class DomaineComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  searchForm: FormGroup;
  domainsTypes = domainTypes
  searchAvailableDomains: Domain[] = [];
  noAvailableDomains = false;
  waitingForSearchResult = false;

  constructor(
    private fb: FormBuilder,
    private service: RestApiService,
    private router: Router) {

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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
