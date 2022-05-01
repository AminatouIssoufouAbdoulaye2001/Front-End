import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GodaddyAPIService} from "../../Services/dodaddy-api-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchDomainForm: FormGroup
  formSubmited = false;
  sub = new Subscription();

  constructor(
    private fb: FormBuilder,
    private godaddyService: GodaddyAPIService
  ) {
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
    if(this.searchDomainForm.invalid) {
      return
    }
    let data =  {...this.searchDomainForm.value};
    const domain = `${data.name}.${data.type}`
    this.sub.add(
      this.godaddyService.getDomainAvailablity(domain).pipe().subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    )
  }

  ngOnDestroy(): void {

  }
}
