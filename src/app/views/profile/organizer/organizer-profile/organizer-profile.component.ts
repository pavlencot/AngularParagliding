import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizer-profile',
  templateUrl: './organizer-profile.component.html',
  styleUrls: ['./organizer-profile.component.scss']
})
export class OrganizerProfileComponent implements OnInit {
  role: string;
  organizationCode?: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
  description?: string;

  constructor() {
    this.role = "organizer";
this.organizationCode = "MD25618SRL";
this.name = "Red Bull";
this.address = "here";
this.phoneNumber = "+0228420";

   }

  ngOnInit(): void {
  }

}
