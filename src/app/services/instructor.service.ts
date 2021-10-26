import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PilotInstructorModel } from "../models/user/pilotInstructor/pilotInstructor.model";

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {
  }

  getAllInstructors(): Observable<PilotInstructorModel[]> {
    return this._httpClient.get<PilotInstructorModel[]>(`${this.apiUrl}/PilotInstructors`);
  }
}
