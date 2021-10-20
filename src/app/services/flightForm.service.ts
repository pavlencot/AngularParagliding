import { FlightLocationModel } from './../models/booking/flightLocation.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlightFormModel } from '../models/booking/flightForm.model';
import { EnvironmentUrlService } from './environment-url.service';


@Injectable({
  providedIn: 'root'
})
export class FlightFormService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {
  }

  createBooking(booking: FlightFormModel): Observable<string> {
    return this._httpClient.post<string>(`${this.apiUrl}/flight-form`, FlightFormModel);

  }


  getBooking(id: string): Observable<FlightFormModel> {
    return this._httpClient.get<FlightFormModel>(`${this.apiUrl}/bookings/${id}`);
  }

  getAllFlightLocations(): Observable<FlightLocationModel> {
    return this._httpClient.get<FlightLocationModel>(`${this.apiUrl}/flight-form`);
  }
}
