import { FlightLocationModel } from "./flightLocation.model";

export class FlightFormModel {
  name!: string;
  phoneNumber!: string;
  email!: string;
  date!: Date;
  location!: FlightLocationModel;
}
