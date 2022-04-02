import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;
  loginForm!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private formBuilder:FormBuilder) {}
  ngOnInit(){
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      cpassword:['',[Validators.required,Validators.minLength(8)]],
      
    });
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
  password:['',Validators.required],
    })
  }
  onSubmitSignUpForm() {
  console.log(this.signupForm.value)
  }

  onSubmitLoginForm() {
    console.log(this.loginForm.value)
    }
}
