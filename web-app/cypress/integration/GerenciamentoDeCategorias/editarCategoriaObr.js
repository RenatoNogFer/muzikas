import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Eu estou na página {string}', (page) => {
  cy.visit(`/page/${page}`);
});

Given('Eu vejo a categoria de nome {string}', (categoryName) => {
  cy.get('.category-list')
    .contains(categoryName)
    .click();
});

Given('A categoria de nome {string} possui descrição {string}', (categoryName, categoryDescription) => {
  // Set category description in the system
});

When('Eu altero descrição da categoria de nome {string} para vazio', (categoryName) => {
  cy.get('input[name="category-description"]')
    .clear();
});

When('Eu confirmo a edição da categoria', () => {
  cy.get('button[name="submit-edit-category"]')
    .click();
});

Then('Eu ainda estou na página {string}', (page) => {
  cy.url().should('include', `/page/${page}`);
});

Then('Uma mensagem de erro é exibida', () => {
  cy.get('.error-message')
    .should('be.visible');
});

Then('Eu vejo a categoria de nome {string}', (categoryName) => {
  cy.get('.category-list')
    .contains(categoryName)
    .should('be.visible');
});

Then('A categoria de nome {string} segue com descrição {string}', (categoryName, categoryDescription) => {
  cy.get('.category-list')
    .contains(categoryName)
    .click();

  cy.get('.category-description')
    .should('contain', categoryDescription);
});