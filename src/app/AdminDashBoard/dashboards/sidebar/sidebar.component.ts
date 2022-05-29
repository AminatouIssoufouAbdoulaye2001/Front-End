import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import {AuthService} from "../../../Services/auth.service";

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

  constructor(
    private _router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sidebarAffiche();
    // Loading links depending on the context
    if (this.location?.includes('admin')) this.loadLinks();
    else if (this.location?.includes('agency')) this.loadAgencyLinks();
  }

  loadLinks = () => {
    this.links = [
      {
        routerLink: '/',
        label: 'Home',
        icon: PrimeIcons.HOME,
        tooltip: "Revenir à la page d'acceuil",
      },
      {
        routerLink: '',
        label: 'Dashboard',
        icon: PrimeIcons.CHART_LINE,
        tooltip: 'Aller au dashboard',
      },
      {
        routerLink: 'services',
        label: 'Services',
        icon: PrimeIcons.SERVER,
        tooltip: 'Gérer vos services',
      },
      {
        routerLink: 'subscriptions',
        label: "Abonnements",
        icon: PrimeIcons.TAGS,
        tooltip: 'Sections des abonnements',
      },
      {
        routerLink: 'domains',
        label: 'Domaines',
        icon: PrimeIcons.GLOBE,
        tooltip: 'Domaine vendus',
      },
      {
        routerLink: 'customers',
        label: 'Client',
        icon: PrimeIcons.USER_EDIT,
        tooltip: 'Sections des clients',
      },
      {
        routerLink: 'profil',
        label: 'Profil',
        icon: PrimeIcons.USER_PLUS,
        tooltip: 'Informations du profil',
      },
      {
        routerLink: 'logout',
        label: 'Déconnexion',
        icon: PrimeIcons.SIGN_OUT,
        tooltip: 'Terminer votre session',
      }
    ];
  };

  loadAgencyLinks = () => {
    this.links = [
      {
        routerLink: '/agency/dashboard',
        label: 'Dashboardpppp',
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
        routerLink: '',
        label: 'Déconnexionnn',
        icon: PrimeIcons.SIGN_OUT,
        tooltip: 'Terminer votre session',
      },
    ];
  };

  lezgo(routerLink: string) {
    if (routerLink === 'logout') {
      this.authService.logOut();
      this._router.navigate(['']);
    } else if(routerLink === '') {
      this._router.navigate(['dashboard/admin']);
    }
    else
    {
      console.log(routerLink)
      this._router.navigate([`${routerLink}`], {relativeTo: this.route});
    }
  }

  notifyClosing = () => this.closeNotifier.emit(false);

  sidebarAffiche=() => this.location=window.location.href;
}
