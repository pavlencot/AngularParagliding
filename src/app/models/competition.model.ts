import { CompetitionOrganizerModel } from "./competitionOrganizer.model";
import { LocationModel } from "./location.model";
import { ParticipantModel } from "./participant.model";

export class CompetitionModel {
  name!: string;
  location!: string;
  periodFrom!: Date;
  periodTo!: Date;
}
