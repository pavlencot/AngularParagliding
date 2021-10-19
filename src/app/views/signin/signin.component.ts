import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signin: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(8) ])
  });

  hide = true;

  get emailInput() {
     return this.signin.get('login');
    }

  get passwordInput() {
     return this.signin.get('password');
    }

  constructor(private fb: FormBuilder) { }


  signinForm = this.fb.group({
    login: [''],
    password: [''],


});

submit(){
  console.log('Form data is ', this.signinForm.value);
}
}
