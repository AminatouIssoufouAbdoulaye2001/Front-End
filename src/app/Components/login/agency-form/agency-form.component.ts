import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getSweetAlert } from '../../../utility/js-libraries';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
  PrimeIcons,
} from 'primeng/api';
import { Subscription } from 'rxjs';

var Swal = getSweetAlert();

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class AgencyFormComponent implements OnInit {
  @Input() agency: any = {
    AgenceId: 0,
    Adresse: null,
    Signalement: 0,
    Latitude: 0,
    Longitude: 0,
    Compte: {
      CompteId: 0,
      DateInscription: null,
      IsBlocked: 0,
      IsConnected: 0,
      Mail: null,
      Nom: null,
      NumeroTelephone: null,
      Password: null,
      Prenom: null,
      Username: null,
    },
  };

  @Input() decoyAgency!: any | null;

  subscription!: Subscription;

  @Input() formAction!: string;

  @ViewChild('Password') password!: HTMLInputElement;
  @ViewChild('confirmPassword') confirmPassword!: HTMLInputElement;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {}

  
}