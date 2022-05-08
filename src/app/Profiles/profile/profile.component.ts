import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {finalize, Subscription} from "rxjs";
import {UserInfo} from "../../Models/user.models";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../Services/users.service";
import {MessageService} from "primeng/api";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit, OnDestroy {
  profilForm: FormGroup;
  changePassworForm: FormGroup;
  sub = new Subscription();
  userProfil: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UsersService,
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService
  ) {
    this.changePassworForm = fb.group({
      newPassword: fb.control('', Validators.required),
      confNewPassword: fb.control('', Validators.required),
    })

    this.profilForm = fb.group({
      id: fb.control(null, Validators.required),
      username: fb.control('', Validators.required),
      fullName: fb.control('', Validators.required),
      email: fb.control('', [
        Validators.required,
        Validators.email
      ]),
      phone: fb.control('')
    })
  }

  ngOnInit(): void {
    this.sub.add(
      this.userService.getUserInfos().subscribe(
        data => {
          this.userProfil = data;
          this.profilForm.reset(data)
        }
      )
    );
  }

  submitProfil() {
    if (this.profilForm.invalid) {
      return;
    }
    let userProfil = this.profilForm.value as UserInfo;

    this.sub.add(this.userService.patchProfil(userProfil)
      .subscribe(data => {
        this.messageService.add({
          severity: 'success',
          summary: 'Message',
          detail: 'Votre profil a été modifié',
          life: 3000
        });

        this.profilForm.reset(data)
      })
    );
  }

  resetProfil() {
    this.sub.add(
      this.userService.getUserInfos().subscribe(
        data => {
          this.profilForm.reset(data)
        }
      )
    );
  }

  submitChangePassword() {
    if (this.changePassworForm.invalid) {
      return;
    }
  }

  resetPasswordForm() {
    this.changePassworForm.reset();
  }

  patchPassword() {
    if (this.changePassworForm.invalid)
      return;

    let data = this.changePassworForm.value;
    data['userId'] = this.userProfil['id'];
    this.sub.add(
      this.userService.patchPassword(data)
        .pipe(
          finalize(() => {
            this.resetPasswordForm();
          })
        )
        .subscribe(
        data => {
          if (data.success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Message',
              detail: data.payload,
            });
          }
        },
        error => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Message',
            detail: error.message,
          });
        }
      )
    )
  }

  desableAccount() {

    this.userService.desableAccount(this.userProfil['id']).subscribe(
      data => {
        this.authService.logOut();
        this.router.navigate(['/']);
      }
    )

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
