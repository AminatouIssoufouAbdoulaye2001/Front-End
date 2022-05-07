import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {UserInfo} from "../../Models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../Services/users.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profilForm: FormGroup;
  changePassworForm: FormGroup;
  sub = new Subscription();
  userProfil: UserInfo

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.changePassworForm = fb.group({
      oldPassword: fb.control('', Validators.required),
      newPassword: fb.control('', Validators.required),
      ConfNewPassword: fb.control('', Validators.required),
    })

    this.profilForm = fb.group({
      id: fb.control(null, Validators.required),
      username: fb.control('', Validators.required),
      fullName: fb.control('', Validators.required),
      email: fb.control('', [Validators.required, Validators.email]),
      phone: fb.control('')
    })
  }

  ngOnInit(): void {
    let data = this.route.parent?.snapshot.data;
    if (data) {
      this.userProfil =  data['userInfos'] as UserInfo;
      this.profilForm.reset(this.userProfil);
    }
  }

  submitProfil() {
    if (this.profilForm.invalid) {
      return;
    }
    let userProfil = this.profilForm.value as UserInfo;

    this.sub.add(this.userService.patchProfil(userProfil)
      .subscribe( data => this.profilForm.reset(data))
    );
  }

  resetProfil() {

  }

  submitChangePassword() {
    if (this.changePassworForm.invalid) {
      return;
    }
  }

  resetPasswordForm() {
    this.changePassworForm.reset();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
