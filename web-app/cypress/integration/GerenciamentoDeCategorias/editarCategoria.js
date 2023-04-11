import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Eu estou na página {string}", (pagina) => {
  cy.visit(pagina);
});

Given('Eu vejo a categoria de nome {string}', (nomeCategoria) => {
  cy.get('.lista-categorias')
    .should('contain', nomeCategoria);
});

Given('A categoria de nome {string} possui descrição {string}', (nomeCategoria, descricaoCategoria) => {
  cy.get('.lista-categorias')
    .contains(nomeCategoria)
    .parent()
    .should('contain', descricaoCategoria);
});

When('Eu altero a descrição da categoria de nome {string} para {string}', (nomeCategoria, novaDescricao) => {
  cy.get('.lista-categorias')
    .contains(nomeCategoria)
    .parent()
    .contains('button', 'Editar')
    .click();

  cy.get('input[name="descricao"]')
    .clear()
    .type(novaDescricao);
});

When('Eu confirmo a edição da categoria', () => {
  cy.get('button[type="submit"]')
    .click();
});

Then("Eu estou na página {string}", (pagina) => {
  cy.url()
    .should('include', pagina);
});

Then('A categoria de nome {string} agora possui a descrição {string}', (nomeCategoria, novaDescricao) => {
  cy.get('.lista-categorias')
    .contains(nomeCategoria)
    .parent()
    .should('contain', novaDescricao);
});