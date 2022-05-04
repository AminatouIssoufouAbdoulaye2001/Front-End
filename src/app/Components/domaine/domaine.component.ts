import {Component, OnDestroy, OnInit} from '@angular/core';
import {finalize, map, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {domainTypes} from "../../Models/domain-type.models";
import {RestApiService} from "../../Services/rest-api-service";
import {Domain} from "../../Models/domain.model";

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

  constructor(private fb: FormBuilder, private service: RestApiService) {
    this.searchForm = fb.group({
      domain: fb.control('', Validators.required),
      type: fb.control("com", Validators.required)
    })
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.searchForm.invalid) {
      return;
    }
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
