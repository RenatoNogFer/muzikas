import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Eu estou na página {string}", (pagina) => {
  cy.visit(pagina);
});

Given('A categoria com nome {string} não existe no sistema', (nomeCategoria) => {
  cy.get('.lista-categorias')
    .should('not.contain', nomeCategoria);
});

When("Eu crio a categoria com nome {string}", (nomeCategoria) => {
  cy.get('#campo-nome')
    .type(nomeCategoria);
});

When('Eu confirmo a criação da categoria', () => {
  cy.get('#botao-confirmar')
    .click();
});

Then("Eu ainda estou na página {string}", (pagina) => {
  cy.url()
    .should('include', pagina);
});

Then('Eu vejo uma mensagem de erro', () => {
  cy.get('.mensagem-erro')
    .should('exist');
});