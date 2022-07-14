import { IUser } from "./interfaces/blog";

export interface IUserOperations {
  orderAlphabeticallyByName(): IUser[];
}

export class UserOperations implements IUserOperations {
  users: IUser[] = [];
  constructor(users: IUser[]) {
    this.users = users;
  }
  orderAlphabeticallyByName(): IUser[] {
    return [];
  }
}
