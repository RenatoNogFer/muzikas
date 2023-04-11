import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Eu estou na página {string}", (pagina) => {
  cy.visit(pagina);
});

Given('Eu vejo a categoria de nome {string}', (nomeCategoria) => {
  cy.get('.lista-categorias')
    .should('contain', nomeCategoria);
});

When('Eu removo a categoria de nome {string}', (nomeCategoria) => {
  cy.get('.lista-categorias')
    .contains('button', 'Remover')
    .click();
});

Then("Eu estou na página {string}", (pagina) => {
  cy.url()
    .should('include', pagina);
});

Then('Eu não vejo a categoria de nome {string}', (nomeCategoria) => {
  cy.get('.lista-categorias')
    .should('not.contain', nomeCategoria);
});