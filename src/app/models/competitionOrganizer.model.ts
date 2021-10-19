import { CompetitionModel } from "./competition.model";
import { OrganizerModel } from "./organizer/organizer.model";

export class CompetitionOrganizerModel {
  id!: number;
  competitionId!: number;
  competition!: CompetitionModel;
  organizerId!: number;
  organizer!: OrganizerModel;
}
