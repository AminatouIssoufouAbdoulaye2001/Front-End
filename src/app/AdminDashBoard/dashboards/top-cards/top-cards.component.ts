import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss'],
})
export class TopCardsComponent implements OnInit {
  topcards: any;

  constructor() {}

  ngOnInit(): void {
    this.topcards = this.loadData();
  }

  /**
   * @returns Fake data that will be displayed
   */
  loadData() {
    return [
      {
        bgcolor: 'success',
        icon: PrimeIcons.DOLLAR,
        title: '21,000 DT',
        subtitle: 'Revenus',
      },
      {
        bgcolor: 'danger',
        icon: PrimeIcons.GLOBE,
        title: '15',
        subtitle: 'Domaines',
      },
      {
        bgcolor: 'warning',
        icon: PrimeIcons.USERS,
        title: '456',
        subtitle: 'Utilisateurs',
      },
      {
        bgcolor: 'info',
        icon: PrimeIcons.TICKET,
        title: '10',
        subtitle: 'Tickets',
      },
    ];
  }
}
