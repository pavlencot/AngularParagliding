import { UserModel } from "../user/user.model";

export class OrganizerModel {
  id!: number;
  userId!: number;
  user!: UserModel;
}
