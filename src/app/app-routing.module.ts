import { CompetitionsPageComponent } from './views/competitions-page/competitions-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { PilotProfileComponent } from './views/profile/pilot-profile/pilot-profile.component';
import { OrganizerProfileComponent } from './views/profile/organizer/organizer-profile/organizer-profile.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/form/form.component';
import { SigninComponent } from './views/signin/signin.component';
import { PilotInstructorProfileComponent } from './views/profile/pilot-instructor-profile/pilot-instructor-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home-page'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'flight-form',
    component: FormComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'organizer-profile',
    component: OrganizerProfileComponent
  },
  {
    path: 'pilot-profile',
    component: PilotProfileComponent
  },
  {
    path: 'pilot-instructor-profile',
    component: PilotInstructorProfileComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'competitions',
    component: CompetitionsPageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
