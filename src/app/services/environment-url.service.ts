import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FilterOperators } from '../models/pageRequest/enums/FilterOperators';
import { PagedRequest } from '../models/pageRequest/pagedRequest.model';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {

  public api_url: string = environment.apiUrl;

  public getParams(pagedRequest: PagedRequest): HttpParams {
    let params = new HttpParams()
      .append('PageIndex', pagedRequest.pageIndex)
      .append('PageSize', pagedRequest.pageSize)
      .append('ColumnNameForSorting', pagedRequest.columnNameForSorting)
      .append('SortDirection', pagedRequest.sortDirection)

    if (pagedRequest.requestFilters != null) {
      params = params.append('RequestFilters.LogicalOperator', pagedRequest.requestFilters.logicalOperator)

      pagedRequest.requestFilters.filters.forEach((filter, index) => {
        params = params.append(`RequestFilters.Filters[${index}].Path`, filter.path)

        if (filter.value) {
          params = params.append(`RequestFilters.Filters[${index}].Value`, filter.value)
        }

        params = params.append(`RequestFilters.Filters[${index}].operator`, filter.operator ?? FilterOperators.Equals)
      })

    }

    return params;
  }
}
