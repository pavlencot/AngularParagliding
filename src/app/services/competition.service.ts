import { CompetitionModel } from './../models/competition/competition.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { PagedRequest } from '../models/pageRequest/pagedRequest.model';
import { PagedResult } from '../models/pageRequest/pagedResult.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private _httpClient: HttpClient, private _envUrlService: EnvironmentUrlService) {
  }

  createCompetition(competition: CompetitionModel): Observable<string> {
    return this._httpClient.post<string>(`${this._envUrlService.api_url}/Competitions`, competition);
  }

  getCompetition(id: number): Observable<CompetitionModel> {
    return this._httpClient.get<CompetitionModel>(`${this._envUrlService.api_url}/Competitions`);
  }

  getCompetitionsPaged(pagedRequest: PagedRequest): Observable<PagedResult<CompetitionModel>> {
    return this._httpClient.get<PagedResult<CompetitionModel>>(`${this._envUrlService.api_url}/Competitions/get-paged?${PagedRequest.buildQueryString(pagedRequest)}`);
  }
  
}
