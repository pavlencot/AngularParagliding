import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';

// class CustomValidators {
//   static passwordContainsNumber(control: AbstractControl): ValidationErrors {
//     const regex= /\d/;

//     if(regex.test(control.value) && control.value !== null) {
//       return null;
//     } else {
//       return {passwordInvalid: true};
//     }
//   }

//   static passwordsMatch (control: AbstractControl): ValidationErrors {
//     const password = control.get('password').value;
//     const confirmPassword = control.get('confirmPassword').value;

//     if((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
//       return null;
//     } else {
//       return {passwordsNotMatching: true};
//     }
//   }
// }

@Component({
  selector: 'app-pilot-registration',
  templateUrl: './pilot-registration.component.html',
  styleUrls: ['./pilot-registration.component.scss']
})
 export class PilotRegistrationComponent  {}

//   registerForm?: FormGroup;

//   constructor(
//     private authService: AuthenticationService,
//     private formBuilder: FormBuilder,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.registerForm = this.formBuilder.group({
//       name: [null, [Validators.required]],
//       username: [null, [Validators.required]],
//       email: [null, [
//         Validators.required,
//         Validators.email,
//         Validators.minLength(6)
//       ]],
//       password: [null, [
//         Validators.required,
//         Validators.minLength(3),
//         CustomValidators.passwordContainsNumber
//       ]],
//       confirmPassword: [null, [Validators.required]]
//     },{
//        validators: CustomValidators.passwordsMatch
//     })
//   }

//   onSubmit(){
//     if(this.registerForm.invalid) {
//       return;
//     }
//     console.log(this.registerForm.value);
//     this.authService.register(this.registerForm.value).pipe(
//       map(user => this.router.navigate(['login']))
//     ).subscribe()
//   }

// }
