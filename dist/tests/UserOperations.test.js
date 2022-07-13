"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var UserOperations_1 = require("../src/UserOperations");
var users = [];
describe("[Unit] UserOperations.ts", function () {
    describe(".orderAlphabeticallyByName", function () {
        context("when having an array of users", function () {
            var userOperations = new UserOperations_1.UserOperations(users);
            var orderedUsers = userOperations.orderAlphabeticallyByName();
            it("returns an array of users", function () {
                (0, chai_1.expect)(orderedUsers).to.be.an("array");
            });
            it("must start the first user's name with the letter a", function () {
                var first = orderedUsers[0];
                var regexExp = new RegExp("^A", "i");
                (0, chai_1.expect)(first.firstName).to.match(regexExp);
            });
            it("must start the last user's name with the letter z", function () {
                var first = orderedUsers[orderedUsers.length - 1];
                var regexExp = new RegExp("^Z", "i");
                (0, chai_1.expect)(first.firstName).to.match(regexExp);
            });
        });
    });
});
//# sourceMappingURL=UserOperations.test.js.map