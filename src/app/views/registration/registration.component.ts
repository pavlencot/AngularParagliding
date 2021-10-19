import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration: FormGroup = new FormGroup ({
    name: new FormControl(),
    phoneNumber: new FormControl(),
    code: new FormControl(),
    address: new FormControl(),
    description: new FormControl()
  }
  )

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    name: [''],
    phoneNumber: [''],
    code: [''],
    address: [''],
    description: ['']

});

submit(){
  console.log('Form data is ', this.registrationForm.value);
}
}
