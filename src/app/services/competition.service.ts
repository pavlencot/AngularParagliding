import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { CompetitionModel } from '../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private _httpClient: HttpClient, private _envUrlService: EnvironmentUrlService) {
  }

  createCompetition(competition: CompetitionModel): Observable<string> {
    return this._httpClient.post<string>(`${this._envUrlService.api_url}/products`, competition);
  }
}
