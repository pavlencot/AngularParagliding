import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    name: [''],
    phoneNumber: [''],
    email: [''],
    date: [''],
    location: ['']

});

submit(){
  console.log('Form data is ', this.registrationForm.value);
}
}
