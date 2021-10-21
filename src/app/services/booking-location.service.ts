import { FlightLocationModel } from './../models/booking/flightLocation.model';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingLocationService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {
  }

  getFlightLocations(): Observable<FlightLocationModel[]> {
    return this._httpClient.get<FlightLocationModel[]>(`${this.apiUrl}/BookingLocations`);
  }
}
