import { RegistrationComponent } from './views/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/form/form.component';
import { SigninComponent } from './views/signin/signin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin'},
  { path: 'signin', component: SigninComponent },
  { path: 'bookingForm', component: FormComponent },
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
