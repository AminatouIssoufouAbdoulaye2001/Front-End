import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/Services/auth.service';
import {getJquery} from "@utility/js-libraries";
import {Router} from "@angular/router";

var $ = getJquery();


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  displayResetModal: boolean = false;

  displayRegistration: boolean = false;

  displayOptions: boolean = true;

  choosenType!: string;


  isSmall!: boolean;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {

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

  getusername = () => this.signupForm.get('userName');

  getFullName = () => this.signupForm.get('fullName');

  getPassword = () => this.signupForm.get('password');

  getPasswordConf = () => this.signupForm.get('passwordConf');

  getEmail = () => this.signupForm.get('email');

  navigateToHome() {
    this.router.navigate(['home']);
  }

  choseAgency(): void {
    this.choosenType = 'Agency';
    this.displayRegistration = true;
  }

  choseUser(): void {
    this.choosenType = 'User';
    this.displayRegistration = true;
  }

  hideRegistration(): void {
    this.displayRegistration = false;
    this.displayOptions = false;
  }
}
