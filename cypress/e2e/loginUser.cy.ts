/// <reference types="cypress" />

describe("Login user spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/login");
  });
  context("when login an user with the correct credentials", () => {
    it(" navigates to the user's profile", () => {
      cy.get('[data-cy="email"]').type("alex@mail.com");

      cy.get('data-cy="password"').type("123456");

      cy.get('[data-cy="profile-form"]').submit();
      //cy.wait(1000);
      cy.get('[data-cy="title"]').should("have.text", "Profile");
    });
  });

  context("when login user with the incorrect credentials", () => {
    it("shows an error message", () => {
      cy.get('data-cy="email"').type("alex@mail.com");

      cy.get('[data-cy="password"]').type("123456");

      cy.get('[data-cy="profile-form"]').submit();
      //cy.wait(1000);
      cy.get('[data-cy="error"]').should("have.text", "Incorrect Credentials");
    });
  });
});
