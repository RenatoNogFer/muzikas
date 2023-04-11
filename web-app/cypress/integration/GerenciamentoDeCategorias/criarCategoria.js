import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Eu estou logado como {string}", (user) => {
    localStorage.setItem("user", JSON.stringify({"id":3,"email":"sugmabals@gmail.com","token":"a","tokenExpiration":1681828114072,"cnpj":"1234"}))
});

Given("Eu estou na página {string}", (pagina) => {
  cy.visit(pagina);
});

Given('A categoria com nome {string} não existe no sistema', (nomeCategoria) => {
  cy.get('.lista-categorias').should('not.contain', nomeCategoria);
});

When("Eu crio a categoria com nome {string}", (nomeCategoria) => {
  cy.get('#campo-nome').type(nomeCategoria);
});

When('Eu forneço a descrição {string}', (descricao) => {
  cy.get('#campo-descricao').type(descricao);
});

When('Eu confirmo a criação da categoria', () => {
  cy.get('#botao-confirmar').click();
});

Then("Eu estou na página {string}", (pagina) => {
  cy.url().should('include', pagina);
});

Then('Eu vejo a categoria de nome {string}', (nomeCategoria) => {
  cy.get('.lista-categorias').should('contain', nomeCategoria);
});