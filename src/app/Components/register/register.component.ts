import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from "rxjs";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  signupForm: FormGroup;
  loginForm: FormGroup;
  showLoginForm = true;

  errorMessage = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
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

  onChangeTab(value: number) {
    value === 1 ? this.showLoginForm = true : this.showLoginForm = false;
    console.log(this.showLoginForm)
  }

  onSubmitSignUpForm() {
    if (this.signupForm.valid) {
      this.subscription.add(this.authService.register(this.signupForm.value).subscribe( res =>{
        if (res.success === true) {
          // demo
          this.showLoginForm = true;
          alert(res.message)
        } else {
          //demo
          alert(res.message)
        }
      }))
    }
  }

  onSubmitLoginForm() {
    if (this.loginForm.valid) {
      this.subscription.add(this.authService.login(this.loginForm.value).subscribe(res => {

        // ceci est une démo
        // todo : à changer pour une application plus propre
        if (res.success === true) {
          alert('vous êtes bien loger, attendez la création du dashboard :) votre token est stocké dans session storage')
          this.loginForm.reset({})
        } else {
          alert(res.message)
        }

      }))
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
