/// <reference types="cypress" />
describe('', () => {
  const page = {
    login: () => {
      cy.get('[name="username"]').type('Maryana');
      cy.get('[name="password"]').type('Pa$$word1!');
      cy.get('.btn.btn-success').click();
    },
  }

  beforeEach('Open website', () => {
    cy.visit('/registerlogin/registerlogin.php');
  });
  
  it('Login', () => {
    page.login()
  });

  it('Verifying all elements presence', () => {
    page.login()
    cy.get('[name="username"]').should('be.visible');
    cy.get('[name="password"]').should('be.visible');
    cy.get('.btn.btn-success').should('be.visible');
  });

    
  it('Verify error messages presence', () => {
    page.login()
    cy.get('.help-block').should('contain.text', 'No account found with that username.');
  });

  it('Failed test case', () => {
    page.login()

    cy.url().should('include', '/profile');
  });
});