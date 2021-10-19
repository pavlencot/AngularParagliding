import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, tap, switchMap } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly apiUrl: string = environment.apiUrl;
  // private currentUser: UserModel = null;

  constructor(private readonly http: HttpClient)
  {}

}

