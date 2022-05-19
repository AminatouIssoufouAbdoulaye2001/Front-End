import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html',
  styleUrls: ['./sales-ratio.component.scss'],
})
export class SalesRatioComponent implements OnInit {
  plotData: any;
  constructor() {}

  ngOnInit(): void {
    this.plotData = this.loadData();
  }

  loadData() {
    const res = {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
      datasets: [
        {
          label: 'revenus',
          data: [0, 0, 35.000, 0, 50.0000, 0, 45.000],
          fill: true,
          tension: 0.4,
          borderColor: '#42A5F5',
        },
        {
          label: 'Clients',
          data: [0, 6, 0, 3, 0, 4, 2],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: '#66BB6A',
        },
        {
          label: 'domaines',
          data: [0, 0, 4, 0, 1, 0, 2],
          fill: true,
          borderColor: '#FFA726',
          tension: 0.4,
          backgroundColor: 'rgba(255,167,38,0.2)',
        },
      ],
    };

    return res;
  }
}
