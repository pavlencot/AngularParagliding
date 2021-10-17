import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormComponent } from './views/form/form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SigninComponent } from './views/signin/signin.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { OrganizerProfileComponent } from './views/profile/organizer/organizer-profile/organizer-profile.component';
import { PilotRegistrationComponent } from './views/registrations/pilot-registration/pilot-registration.component';
import { OrganizerRegistrationComponent } from './views/registrations/organizer-registration/organizer-registration.component';
import { PilotInstructorProfileComponent } from './views/profile/pilot-instructor-profile/pilot-instructor-profile.component';
import { PilotProfileComponent } from './views/profile/pilot-profile/pilot-profile.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CompetitionTableComponent } from './shared/competition-table/competition-table.component';
import { CompetitionsPageComponent } from './views/competitions-page/competitions-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    SigninComponent,
    RegistrationComponent,
    OrganizerProfileComponent,
    PilotRegistrationComponent,
    OrganizerRegistrationComponent,
    PilotInstructorProfileComponent,
    PilotProfileComponent,
    HomePageComponent,
    CompetitionTableComponent,
    CompetitionsPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    FlexLayoutModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
