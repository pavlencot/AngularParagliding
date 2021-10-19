import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Competition {
  name: string;
  country: string;
  periodFrom: Date;
  periodTo: Date;
}

const DATA: Competition[] = [
  {name: "Competition 1", country: 'Macedonia', periodFrom: new Date('01-10-2022'), periodTo: new Date('01-21-2022')},
  {name: "Competition 2", country: 'Austria', periodFrom: new Date('05-10-2022'), periodTo: new Date('05-11-2022')},
  {name: "Competition 3", country: 'Romania', periodFrom: new Date('02-12-2022'), periodTo: new Date('02-22-2022')},
  {name: "Competition 1", country: 'Macedonia', periodFrom: new Date('01-10-2022'), periodTo: new Date('01-21-2022')},
  {name: "Competition 2", country: 'Austria', periodFrom: new Date('05-10-2022'), periodTo: new Date('05-11-2022')},
  {name: "Competition 3", country: 'Romania', periodFrom: new Date('02-12-2022'), periodTo: new Date('02-22-2022')},
  {name: "Competition 1", country: 'Macedonia', periodFrom: new Date('01-10-2022'), periodTo: new Date('01-21-2022')},
  {name: "Competition 2", country: 'Austria', periodFrom: new Date('05-10-2022'), periodTo: new Date('05-11-2022')},
  {name: "Competition 3", country: 'Romania', periodFrom: new Date('02-12-2022'), periodTo: new Date('02-22-2022')}
]

@Component({
  selector: 'app-competition-table',
  templateUrl: './competition-table.component.html',
  styleUrls: ['./competition-table.component.scss']
})
export class CompetitionTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'country', 'periodFrom', 'periodTo'];

  dataSource = new MatTableDataSource<Competition>(DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

}
