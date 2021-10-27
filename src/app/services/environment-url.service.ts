import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PagedRequest } from '../models/pageRequest/pagedRequest.model';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {

  public api_url: string = environment.apiUrl;
  
}
