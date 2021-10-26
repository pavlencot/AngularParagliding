import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginModel } from './../../models/user/account/userLogin.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BearerToken } from 'src/app/models/user/account/bearerToken.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  hide = true;

  private returnUrl!: string;

  constructor(private _formBuilder: FormBuilder,
    private _authService:  AuthenticationService,
    private _router: Router,
    private _route: ActivatedRoute)
    { }

  ngOnInit(): void {
    this.initForm();

    this.returnUrl = this._route.snapshot.queryParams['returnUrl'];
  }

  initForm(): void {
    this.signinForm = this._formBuilder.group({
      login: new FormControl('', [Validators.email, Validators.required ]),
      password: new FormControl('', [Validators.required, Validators.min(8) ])
    })
  }

  submit() {
    const user: UserLoginModel = {
      ...this.signinForm.value
    };
    this._authService.login(user)
    .subscribe((bearerToken: BearerToken) => {
      localStorage.setItem('accessToken', bearerToken.accessToken);
      this._router.navigate([this.returnUrl]);
    });
  }
}
