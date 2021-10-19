import { CompetitionOrganizerModel } from "./competitionOrganizer.model";
import { LocationModel } from "./location.model";
import { ParticipantModel } from "./participant.model";

export class CompetitionModel {
  id!: number;
  competitionCode!: number;
  locationId!: number;
  location!: LocationModel;

  participants?: ParticipantModel[];
  competitionOrganizers?: CompetitionOrganizerModel[];
}
