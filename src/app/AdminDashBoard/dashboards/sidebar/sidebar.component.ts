import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links!: MenuItem[];

  @Input() location!: string;

  @Input() isVisible!: boolean;

  @Output() closeNotifier = new EventEmitter<boolean>();

 
  displayWeather: boolean = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.sidebarAffiche();
    // Loading links depending on the context
    if (this.location?.includes('admin')) this.loadLinks();
    else if (this.location?.includes('agency')) this.loadAgencyLinks();
  }

  loadLinks = () => {
    this.links = [
      {
        routerLink: '/adminpage/dashboard',
        label: 'Dashboard',
        icon: PrimeIcons.CHART_LINE,
        tooltip: 'Aller au dashboard',
      },
      {
        routerLink: '/adminpage/addservice',
        label: 'Service',
        icon: PrimeIcons.SERVER,
        tooltip: 'Gérer vos services',
      },
      {
        routerLink: '/adminpage/add',
        label: 'Utilisateurs',
        icon: PrimeIcons.USER_PLUS,
        tooltip: 'Gérer les utilisateurs',
      },
      {
        routerLink: '/admin/agence/abonnements',
        label: "Abonnements",
        icon: PrimeIcons.TAGS,
        tooltip: 'Sections des abonnements',
      },
      {
        routerLink: '/admin/factures',
        label: 'Factures',
        icon: PrimeIcons.MONEY_BILL,
        tooltip: 'Génerer les factures',
      },
      {
        routerLink: '/admin/ticket',
        label: 'Ticket',
        icon: PrimeIcons.TICKET,
        tooltip: 'Analyser les tickets',
      },
      {
        routerLink: '/admin/clients',
        label: 'Client',
        icon: PrimeIcons.USER_EDIT,
        tooltip: 'Sections des clients',
      },
      {
        routerLink: '/login',
        label: 'Déconnexion',
        icon: PrimeIcons.SIGN_OUT,
        tooltip: 'Terminer votre session',
      },
    ];
  };

  loadAgencyLinks = () => {
    this.links = [
      {
        routerLink: '/agency/dashboard',
        label: 'Dashboard',
        icon: PrimeIcons.CHART_LINE,
        tooltip: "Consulter le dashboard de l'agence",
      },
      {
        routerLink: '/agency/account',
        label: 'Votre compte',
        icon: PrimeIcons.USER,
        tooltip: "Consulter les données relatives à l'agence",
      },
      {
        routerLink: '/agency/create',
        label: 'Publier une annonce',
        icon: PrimeIcons.PLUS_CIRCLE,
        tooltip: 'Ajouter une nouvelle annonce sur la plateforme',
      },
      {
        routerLink: '/agency/publications',
        label: 'Vos annonces',
        icon: PrimeIcons.IMAGES,
        tooltip: 'Consulter toutes les annonces que vous avez publié',
      },
      {
        routerLink: '/agency/edit',
        label: 'Mettre à jour',
        icon: PrimeIcons.USER_EDIT,
        tooltip: "Modifier les informations relative l'agence",
      },
      {
        routerLink: '/login',
        label: 'Déconnexion',
        icon: PrimeIcons.SIGN_OUT,
        tooltip: 'Terminer votre session',
      },
    ];
  };

  lezgo(routerLink: string) {
    if (routerLink === '/login') {
      sessionStorage.clear();
      this._router.navigate([`${routerLink}`]);
    } else this._router.navigate([`${routerLink}`]);
  }

  displayWeatherDialog = () => (this.displayWeather = true);

  notifyClosing = () => this.closeNotifier.emit(false);
  sidebarAffiche=() => this.location=window.location.href;
}
