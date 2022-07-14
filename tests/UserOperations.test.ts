import { expect } from "chai";
import { IUser } from "../src/interfaces/blog";
import { UserOperations } from "../src/UserOperations";

const users: IUser[] = [];

describe("[Unit] UserOperations.ts", () => {
  describe(".orderAlphabeticallyByName", () => {
    context("when having an array of users", () => {
      const userOperations = new UserOperations(users);
      const orderedUsers = userOperations.orderAlphabeticallyByName();

      it("returns an array of users", () => {
        expect(orderedUsers).to.be.an("array");
      });

      it("must start the first user's name with the letter a", () => {
        const first = orderedUsers[0];
        const regexExp = new RegExp("^A", "i");
        expect(first.firstName).to.match(regexExp);
      });

      it("must start the last user's name with the letter z", () => {
        const first = orderedUsers[orderedUsers.length - 1];
        const regexExp = new RegExp("^Z", "i");
        expect(first.firstName).to.match(regexExp);
      });
      it("must be the last name in uppercase", () => {
        const first = orderedUsers[orderedUsers.length - 1];
        const regexExp = new RegExp("^[A-Z]*$");
        expect(first.lastName).to.match(regexExp);
      });
    });
  });
});
