import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilot-profile',
  templateUrl: './pilot-profile.component.html',
  styleUrls: ['./pilot-profile.component.scss']
})
export class PilotProfileComponent implements OnInit {
  name?: string;
  role: string;
  country?: string;
  licenceNr?: string;
  category?: string;
  issuedOn?: Date;
  validUntil?: Date;

    constructor() {
      this.name = "Tatiana";
      this.role = "pilot";
      this.country = "Moldova";
      this.licenceNr = "AB228";
      this.category = "A";
      this.issuedOn = new Date("2019-01-16");
      this.validUntil = new Date("2022-01-16");
     }

  ngOnInit(): void {
  }
}
