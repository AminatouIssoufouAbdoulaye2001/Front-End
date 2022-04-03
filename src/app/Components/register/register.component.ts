import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;
  loginForm!: FormGroup;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      userName: this.formBuilder.control('', Validators.required),
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConf: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  getUsername = () => this.loginForm.get('userName');

  getPassword = () => this.loginForm.get('password');

  getSignUpFormUsername = () => this.signupForm.get('userName');

  getSignUpFormPassword = () => this.signupForm.get('password');

  getFullName = () => this.signupForm.get('fullName');

  getPasswordConf = () => this.signupForm.get('passwordConf');

  getEmail = () => this.signupForm.get('email');

  onSubmitSignUpForm() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value)
    }
  }

  onSubmitLoginForm() {
    console.log(this.loginForm.value)
  }
}
