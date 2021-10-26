import { CompetitionOrganizerModel } from "../competitionOrganizer.model";
import { LocationModel } from "../location.model";
import { ParticipantModel } from "../participant.model";

export class CompetitionCreateModel {
  id!: number;
  competitionCode!: number;
  competitionName!: string;
  locationId!: number;
  periodFrom!: Date;
  periodTo!: Date;
}
