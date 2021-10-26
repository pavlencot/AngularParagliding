import { CompetitionsPageComponent } from './views/competitions/competitions-page.component';
import { HomePageComponent } from './views/home/home-page.component';
import { PilotProfileComponent } from './views/profile/pilot-profile/pilot-profile.component';
import { OrganizerProfileComponent } from './views/profile/organizer/organizer-profile/organizer-profile.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/booking/form.component';
import { SigninComponent } from './views/signin/signin.component';
import { PilotInstructorProfileComponent } from './views/profile/pilot-instructor-profile/pilot-instructor-profile.component';
import { OrganizerCompetitionsComponent } from './views/profile/organizer/organizer-competitions/organizer-competitions.component';
import { OrganizerEditComponent } from './views/profile/organizer/organizer-edit/organizer-edit.component';

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
    // component: OrganizerProfileComponent
    children: [{
        path: ':id',
        component: OrganizerProfileComponent
      },
      {
        path: 'competitions/:id',
        component: OrganizerCompetitionsComponent
      },
      {
        path: 'edit/:id',
        component: OrganizerEditComponent
      }
    ]
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
