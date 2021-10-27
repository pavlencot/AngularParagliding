import { CompetitionModel } from './../../models/competition/competition.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CompetitionService } from './../../services/competition.service';
import { PagedResult } from '../../models/pageRequest/pagedResult.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/app/models/pageRequest/tableColumn.model';
import { RequestFilters } from 'src/app/models/pageRequest/requestFilters.model';
import { PagedRequest } from 'src/app/models/pageRequest/pagedRequest.model';
import { merge } from 'rxjs';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements AfterViewInit {
  pagedCompetitions!: PagedResult<CompetitionModel>;
  pagedRequest!: PagedRequest;

  tableColumns: TableColumn[] = [
    // { name: 'id', index: 'id', displayName: 'Id', useInSearch: true },
    // { name: 'competitionCode', index: 'competitionCode', displayName: 'Code', useInSearch: true },
    { name: 'competitionName', index: 'competitionName', displayName: 'Competition', useInSearch: true },
    { name: 'location', index: 'location', displayName: 'Location' },
    { name: 'periodFrom', index: 'periodFrom', displayName: 'From' },
    { name: 'periodTo', index: 'periodTo', displayName: 'To' },
  ];

  displayedColumns!: string[];

  searchInput = new FormControl('');
  filterForm: FormGroup;

  requestFilters!: RequestFilters;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _competitionService: CompetitionService,
    private _formBuilder: FormBuilder)
  {
    this.pagedRequest = <PagedRequest>{
      pageIndex: 0,
      pageSize: 5,
      columnNameForSorting: 'competitionName',
      sortDirection: 'asc',
    }

    this.displayedColumns = this.tableColumns.map(column => column.name);
    this.filterForm = this._formBuilder.group({
      competitionName: [''],
      location: ['']
    });
  }

  ngAfterViewInit() {
    this.loadCompetitionsFromApi();
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page).subscribe(() => {
      this.loadCompetitionsFromApi();
    });
  }

  loadCompetitionsFromApi() {
    const paginatedRequest = new PagedRequest(this.paginator, this.sort, '');
    this._competitionService.getCompetitionsPaged(paginatedRequest)
      .subscribe((pagedCompetitions: PagedResult<CompetitionModel>) => {
        this.pagedCompetitions = pagedCompetitions;
      });
  }
}
