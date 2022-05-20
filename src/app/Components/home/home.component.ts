import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchDomainForm: FormGroup
  formSubmited = false;
  sub = new Subscription();

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchDomainForm = fb.group({
      name: fb.control('', Validators.required),
      type: fb.control('com', Validators.required)
    })
  }

  get nameCtrl() {
    return this.searchDomainForm.get('name') as FormControl;
  }

  get typeCtrl() {
    return this.searchDomainForm.get('type');
  }

  ngOnInit(): void {
     
  }

  submit() {
    this.formSubmited = true;
    if (this.searchDomainForm.invalid) {
      return
    }
    let data = {...this.searchDomainForm.value};
    this.router.navigate(
      ['/search-domains'],
      {state: {domain: data.name, type: data.type}}
    )
  }

  ngOnDestroy(): void {

  }

}
