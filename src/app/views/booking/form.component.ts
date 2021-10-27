import { InstructorService } from '../../services/instructor.service';
import { LocationModel } from '../../models/location.model';
import { FlightLocationModel } from '../../models/booking/flightLocation.model';
import { BookingLocationService } from '../../services/booking-location.service';
import { FlightFormService } from '../../services/flightForm.service';
import { FlightFormModel } from '../../models/booking/flightForm.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import { PilotInstructorModel } from 'src/app/models/user/pilotInstructor/pilotInstructor.model';


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
  myForm!: FormGroup;

  selectedLocation!: number;
  locations!: FlightLocationModel[];

  selectedInstructor!: number;
  instructors!: PilotInstructorModel[];

  constructor(private _formBuilder: FormBuilder,
    private _flightFormService: FlightFormService,
    private _bookingLocationService: BookingLocationService,
    private _instructorService: InstructorService)
    { }

  ngOnInit(): void {
    this.initForm();

    this._bookingLocationService.getFlightLocations()
    .subscribe((locations: FlightLocationModel[]) => {
      this.locations = locations;
    });

    this._instructorService.getAllInstructors()
    .subscribe((instructors: PilotInstructorModel[]) => {
      this.instructors = instructors;
    });
  }

  initForm(): void {
    this.myForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      phoneNumber: new FormControl('',[Validators.required, Validators.maxLength(12)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      date: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required]),
      instructor: new FormControl('',[Validators.required])
    });
  }

  createBooking(): void {
    const booking: FlightFormModel = {
      name: this.myForm.controls['name'].value,
      phoneNumber: this.myForm.controls['phoneNumber'].value,
      email: this.myForm.controls['email'].value,
      date: this.myForm.controls['date'].value,
      bookingLocationId: this.selectedLocation,
      pilotInstructorId: this.selectedInstructor
    }

    this._flightFormService.createBooking(booking).subscribe();
    alert('Your reservation has been sent!');
    window.location.reload();
  }
}
