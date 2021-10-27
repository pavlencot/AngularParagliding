import { OrganizerModel } from "./organizer/organizer.model";

export class CompetitionOrganizerModel {
  id!: number;
  competitionId!: number;
  organizerId!: number;
  organizer!: OrganizerModel;
}
