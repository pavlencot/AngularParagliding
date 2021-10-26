import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  selectedRole!: number;

  // registration: FormGroup = new FormGroup ({
  //   name: new FormControl(),
  //   phoneNumber: new FormControl(),
  //   code: new FormControl(),
  //   address: new FormControl(),
  //   description: new FormControl()
  // }
  // )

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registrationForm = this._formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      role: new FormControl('',[Validators.required])
    });
  }




submit(){
  console.log('Form data is ', this.registrationForm.value);
}
}
