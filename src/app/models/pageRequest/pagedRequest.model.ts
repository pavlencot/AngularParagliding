import { RequestFilters } from "./requestFilters.model";

export interface PagedRequest {
  pageIndex: number;
  pageSize: number;
  columnNameForSorting: string;
  sortDirection: string;
  requestFilters?: RequestFilters;

}
