import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-pilot-instructor-profile',
  templateUrl: './pilot-instructor-profile.component.html',
  styleUrls: ['./pilot-instructor-profile.component.scss']
})
export class PilotInstructorProfileComponent implements OnInit {
    name?: string;
    role: string;
    country?: string;
    licenceNr?: string;
    category?: string;
    issuedOn?: Date;
    validUntil?: Date;

      constructor() {
        this.name = "Tanya";
        this.role = "pilot";
        this.country = "Moldova";
        this.licenceNr = "AB420";
        this.category = "B";
        this.issuedOn = new Date("2012-01-16");
        this.validUntil = new Date("2032-01-16");
       }

  ngOnInit(): void {
  }

}
