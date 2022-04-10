import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/Services/auth.service';
import {getJquery} from "@utility/js-libraries";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UsersService} from "../../Services/users.service";

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
      userName: fb.control('', Validators.required),
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConf: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService.registerUser(this.signupForm.value).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['../sign-in'], {relativeTo: this.route})
        }
      )
    }
  }

  getusername = () => this.signupForm.get('userName');

  getFullName = () => this.signupForm.get('fullName');

  getPassword = () => this.signupForm.get('password');

  getPasswordConf = () => this.signupForm.get('passwordConf');

  getEmail = () => this.signupForm.get('email');

  navigateToHome() {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
