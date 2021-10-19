import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'
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
selectedLocation?: string;
bookingForm: FormGroup = new FormGroup({
  name: new FormControl(),
  phoneNumber: new FormControl(),
  email: new FormControl(),
  date: new FormControl(),
  location: new FormControl()
})


locations: Location[] = [
  {value: "molovata", viewValue: "Molovata"},
  {value: "orheiulVechi", viewValue: "Orheiul Vechi"},
  {value: "aneniiNoi", viewValue: "Anenii Noi"},
  {value: "roghi", viewValue: "Roghi"}
];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

myForm = this.fb.group({
      name: [''],
      phoneNumber: [''],
      email: [''],
      date: [''],
      location: ['']

  });

  saveForm(){
    console.log('Form data is ', this.myForm.value);
  }

}
