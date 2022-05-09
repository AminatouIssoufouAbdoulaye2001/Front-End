import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/Services/auth.service';
import {getJquery} from "@utility/js-libraries";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UsersService} from "../../Services/users.service";
import {CreateUserForm} from "../../Models/user.models";
import { PleskClientService } from 'src/app/Services/plesk-client.service';

var $ = getJquery();


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  signupForm: FormGroup;
  sub = new Subscription()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private fb: FormBuilder,
    ) {

    this.signupForm = this.fb.group({
      name: fb.control(
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(60)
        ]),
      login: fb.control(
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(60)
        ]),
      email: fb.control(
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(255)
        ]),
      phone: fb.control(''),
      country: fb.control(''),
      city: fb.control(''),
      address: fb.control(''),
      pcode: fb.control(''),
      password: fb.control(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(14)
        ]),
      passwordConf:  fb.control(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(14)
        ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signupForm.invalid)
        return;

    if (this.signupForm.valid) {
      let formData = this.signupForm.value as CreateUserForm;
       this.userService.registerUser(formData).subscribe(
        data => {
          this.router.navigate(['../sign-in'], {relativeTo: this.route})
        },
         error => console.log(error)
      )
    }
  }

  get controls() {
    return this.signupForm.controls;
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
