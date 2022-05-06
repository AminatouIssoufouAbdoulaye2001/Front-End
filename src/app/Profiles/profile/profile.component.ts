import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profilForm: FormGroup;
  changePassworForm: FormGroup;
  sub = new Subscription();

  constructor(private fb: FormBuilder) {
    this.changePassworForm = fb.group({
      oldPassword: fb.control('', Validators.required),
      newPassword: fb.control('', Validators.required),
      ConfNewPassword: fb.control('', Validators.required),
    })

    this.profilForm = fb.group({
      username: fb.control('', Validators.required),
      fullName: fb.control('', Validators.required),
      email: fb.control('', [Validators.required, Validators.email]),
      phone: fb.control('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  submitProfil() {

  }

  resetProfil() {

  }

  submitChangePassword() {

  }
  ngOnDestroy(): void {

  }

}
