import { LocationModel } from './../../models/location.model';
import { FlightLocationModel } from './../../models/booking/flightLocation.model';
import { BookingLocationService } from './../../services/booking-location.service';
import { FlightFormService } from './../../services/flightForm.service';
import { FlightFormModel } from './../../models/booking/flightForm.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';


interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
//booking?: FlightFormModel;
selectedLocation: string = 'test';
isUpdating: boolean = false;
myForm!: FormGroup;
locations!: FlightLocationModel[];

constructor(private _formBuilder: FormBuilder,
  private _flightFormService: FlightFormService,
  private _bookingLocationService: BookingLocationService)
  { }

  ngOnInit(): void {
    this.initForm();

    this._bookingLocationService.getFlightLocations()
    .subscribe((locations: FlightLocationModel[]) => {
      this.locations = locations
    });

  }

  initForm(): void {
    this.myForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      phoneNumber: new FormControl('',[Validators.required, Validators.maxLength(12)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      date: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required])

  });
}


  createBooking(): void {
    const booking: FlightFormModel = {
      name: this.myForm.controls['name'].value,
      phoneNumber: this.myForm.controls['phoneNumber'].value,
      email: this.myForm.controls['email'].value,
      date: this.myForm.controls['date'].value,
      location: this.myForm.controls['location'].value
    }
    this.isUpdating = true;

    this._flightFormService.createBooking(booking).subscribe();
  }

  // onSubmit() : void{
  //   console.log('Form data is ', this.myForm.value);
  // }

  // validateDate(date: Date) : boolean{
  //   if(date < Date.now)
  //   {
  //     return false;
  //   }
  //   else
  //   {
  //     return true;
  //   }
  // }

}
