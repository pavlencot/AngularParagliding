import { Component, OnInit } from '@angular/core';

export interface Competition {
  name: string;
  country: string;
  periodFrom: Date;
  periodTo: Date;
}

const DATA: Competition[] = [
  {name: "Competition 1", country: 'Macedonia', periodFrom: new Date('01-10-2022'), periodTo: new Date('01-21-2022')},
  {name: "Competition 2", country: 'Austria', periodFrom: new Date('05-10-2022'), periodTo: new Date('05-11-2022')},
  {name: "Competition 3", country: 'Romania', periodFrom: new Date('02-12-2022'), periodTo: new Date('02-22-2022')}
]

@Component({
  selector: 'app-competition-table',
  templateUrl: './competition-table.component.html',
  styleUrls: ['./competition-table.component.scss']
})
export class CompetitionTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'country', 'periodFrom', 'periodTo'];

  dataSource = DATA;


  constructor() { }

  ngOnInit(): void {
  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
}
