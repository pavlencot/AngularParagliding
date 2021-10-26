import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormComponent } from './views/booking/form.component';
import { SigninComponent } from './views/signin/signin.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { OrganizerProfileComponent } from './views/profile/organizer/organizer-profile/organizer-profile.component';
import { PilotInstructorProfileComponent } from './views/profile/pilot-instructor-profile/pilot-instructor-profile.component';
import { PilotProfileComponent } from './views/profile/pilot-profile/pilot-profile.component';
import { HomePageComponent } from './views/home/home-page.component';
import { CompetitionsPageComponent } from './views/competitions/competitions-page.component';
import { OrganizerCompetitionsComponent } from './views/profile/organizer/organizer-competitions/organizer-competitions.component';
import { OrganizerEditComponent } from './views/profile/organizer/organizer-edit/organizer-edit.component';
import { PaginatedTableComponent } from './shared/paginated-table/paginated-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    SigninComponent,
    RegistrationComponent,
    OrganizerProfileComponent,
    PilotInstructorProfileComponent,
    PilotProfileComponent,
    HomePageComponent,
    CompetitionsPageComponent,
    OrganizerCompetitionsComponent,
    OrganizerEditComponent,
    PaginatedTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('accessToken'),
        // whitelistedDomains: [environment.whitelistedDomainsForToken],
        // blacklistedRoutes: [environment.blacklistedRoutes]
   }}),
   HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
