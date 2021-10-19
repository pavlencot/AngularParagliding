import { FlightLocationModel } from "./flightLocation.model";

export class FlightFormModel {
  id!: number;
  name!: string;
  phoneNumber!: string;
  email!: string;
  date!: Date;
  locationId!: number;
  location!: FlightLocationModel;
  instructor?: number;
  // instructor?: InstructorModel;
}
