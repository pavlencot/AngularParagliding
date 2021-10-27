import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { RequestFilters } from "./requestFilters.model";

export class PagedRequest {
  pageIndex: number;
  pageSize: number;
  columnNameForSorting: string;
  sortDirection: string;
  filter: string;
  requestFilters?: RequestFilters;

  constructor(paginator: MatPaginator, sort: MatSort, filter: string) {
    this.pageIndex = paginator.pageIndex;
    this.pageSize = paginator.pageSize;
    this.columnNameForSorting = sort.active;
    this.sortDirection = sort.direction;
    this.filter = filter;
}

public static buildQueryString(request: PagedRequest) : string {
  let query: string = `pageSize=${request.pageSize}&pageIndex=${request.pageIndex}`;
  if(request.filter !== undefined && request.filter !== null){
      query += `&filter=${request.filter}`;
  }
  if(request.columnNameForSorting !== undefined && request.columnNameForSorting !== null){
      query += `&columnNameForSorting=${request.columnNameForSorting}`;
  }
  if(request.sortDirection !== undefined && request.sortDirection !== null){
      query += `&sortDirection=${request.sortDirection}`;
  }

  return query
}
}
