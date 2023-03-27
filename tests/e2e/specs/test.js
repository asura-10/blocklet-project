// https://docs.cypress.io/api/table-of-contents
import cy from 'cypress';

describe('E2E Test', () => {
  it('Find the content "Bitcoin Block"', () => {
    cy.visit('http://localhost:8090/');
    cy.contains('span', 'Bitcoin Block');
  });
  it('Press button', () => {
    cy.visit('http://localhost:8090/');
    cy.get('input').type('00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa');
    cy.get('#search').click();
    cy.contains('span', '662,463');
  });
});
