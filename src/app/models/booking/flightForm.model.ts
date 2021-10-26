import { PilotInstructorModel } from "../user/pilotInstructor/pilotInstructor.model";
import { FlightLocationModel } from "./flightLocation.model";

export class FlightFormModel {
  name!: string;
  phoneNumber!: string;
  email!: string;
  date!: Date;
  bookingLocationId!: number;
  pilotInstructorId!: number;
}
