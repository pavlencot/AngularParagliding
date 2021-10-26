import { BearerToken } from './../models/user/account/bearerToken.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap, switchMap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user/user.model';
import { UserLoginModel } from '../models/user/account/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly apiUrl: string = environment.apiUrl + '/Accounts';

  constructor(private _httpClient: HttpClient)
  {}

  login(loginModel: UserLoginModel): Observable<BearerToken> {
    return this._httpClient.post<BearerToken>(`${this.apiUrl}/login`, loginModel);
  }
}

