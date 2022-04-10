import {Component, HostListener, OnDestroy, OnInit,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class SingInComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;


  displayRegistration: boolean = false;

  displayOptions: boolean = false;

  choosenType!: string;


  isSmall!: boolean;

  subscription!: Subscription;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._messageService.clear();
  }

  getPassword = () => this.loginForm.get('password');

  getusername = () => this.loginForm.get('userName');

  getForm = () => this.loginForm;

  onSubmit() {
    console.log(this.loginForm.value);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  choseAgency(): void {
    this.choosenType = 'Agency';
    this.displayRegistration = true;
  }

  choseUser(): void {

    console.log(this.route.url);
    // @ts-ignore
    this.router.navigate(['../sign-up'], {relativeTo: this.route});
  }

  hideRegistration(): void {
    this.displayRegistration = false;
    this.displayOptions = false;
  }
  /**
   * @summary If the two entries have a value, then the login button can be called
   */
  @HostListener('window:keydown.enter')
  onEnter() {
    //   if (this.myForm.get('userName')?.value && this.myForm.get('password')?.value)
    //     document.getElementById('goButton')?.click();
    // }

    /**
     * @summary Gets all data of a given agency, does some control and then redirect it to its account page
     */
    // lezgo(): void {
    //   let userNameEntry = String(this.myForm.get('userName')?.value);
    // }

    /**
     * @summary Listens to to FormButtonComponent displayModal event and then sends its result to the LoginFormComponent
     * @param answer sent by the FormButtonComponent
     * @emits a boolean set to true
     */
    // displayRegistrationModal(answer: boolean): void {
    //   this.displayRegistration = answer;
    // }



    /**
     * @summary Displays a form so that an agency can be registered
     */


    /**
     * @summary Displays a form so that a user can sign up
     */
    // choseUser(): void {
    //   this.choosenType = 'User';
    //   this.displayRegistration = true;
    // }

    /**
     * @summary Hides signing up buttons
     */
    // hideRegistration(): void {
    //   this.displayRegistration = false;
    //   this.displayOptions = false;
    // }
  }
}
