import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getJquery, getSweetAlert } from '../../../utility/js-libraries';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { Router } from '@angular/router';

import { isSmallScreen } from '../../../utility/screen-size';

var Swal = getSweetAlert();

var $ = getJquery();
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class FormComponent implements OnInit, OnDestroy, AfterViewInit {
  myForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),

    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]{8,20}'),
    ]),
  });

  displayResetModal: boolean = false;

  displayRegistration: boolean = false;

  displayOptions: boolean = false;

  choosenType!: string;

  greenColor: string = '#0050d5';

  isSmall!: boolean;

  subscription!: Subscription;

  availableUpdate: boolean = false;

  wantsUpdate!: boolean;

  @Output() registrationModalController = new EventEmitter<boolean>();

  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.isSmall = isSmallScreen();
  }

  ngOnDestroy(): void {
    this._messageService.clear();
  }

  ngAfterViewInit(): void {
    window.screen.width <= 896
      ? $('button').addClass('w-100')
      : $('button').addClass('w-75');
  }

  /**
   * @summary If the two entries have a value, then the login button can be called
   */
  @HostListener('window:keydown.enter')
  onEnter() {
    if (this.myForm.get('userName')?.value && this.myForm.get('password')?.value)
      document.getElementById('goButton')?.click();
  }

  /**
   * @summary Gets all data of a given agency, does some control and then redirect it to its account page
   */
  lezgo(): void {
    let userNameEntry = String(this.myForm.get('userName')?.value);
  }

  /**
   * @summary Listens to to FormButtonComponent displayModal event and then sends its result to the LoginFormComponent
   * @param answer sent by the FormButtonComponent
   * @emits a boolean set to true
   */
  displayRegistrationModal(answer: boolean): void {
    this.displayRegistration = answer;
  }

  /**
   * @summary Leads a user to the home page, even though he has no account but with some restrictions
   */
  browseContent = () => this._router.navigate(['/home']);

  /**
   * @summary Displays a form so that an agency can be registered
   */
  choseAgency(): void {
    this.choosenType = 'Agency';
    this.displayRegistration = true;
  }

  /**
   * @summary Displays a form so that a user can sign up
   */
  choseUser(): void {
    this.choosenType = 'User';
    this.displayRegistration = true;
  }

  /**
   * @summary Hides signing up buttons
   */
  hideRegistration(): void {
    this.displayRegistration = false;
    this.displayOptions = false;
  }
}
