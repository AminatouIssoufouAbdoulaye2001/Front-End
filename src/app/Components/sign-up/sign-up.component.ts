import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
signupForm:FormGroup;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,private formBuilder:FormBuilder) {
    this.signupForm=this.formBuilder.group({
      username:this.formBuilder.control(""),
      email:this.formBuilder.control(""),
      password:this.formBuilder.control(""),
      cpassword:this.formBuilder.control(""),
    })
   }
  ngOnInit(): void {
  }
  onSubmit(): void {
   console.log(this.signupForm.value)
  }
}