import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Eu estou logado como {string}", (user) => {
    localStorage.setItem("user", JSON.stringify({"id":3,"email":"sugmabals@gmail.com","token":"a","tokenExpiration":1681828114072,"cnpj":"1234"}))
});

Given("Eu estou na página {string}", (pagina) => {
  cy.visit('/supplier/categories');
  cy.get('#buttonCreate').click();
  cy.get('[data-cy="createCategories-right-header"]')
});

Given('A categoria com nome {string} não existe no sistema', (nomeCategoria) => {

});

When("Eu crio a categoria com nome {string}", (nomeCategoria) => {
  cy.get('#catNome').type(nomeCategoria);
});

When('Eu forneço a descrição {string}', (descricao) => {
  cy.get('#catDesc').type(descricao);
});

When('Eu confirmo a criação da categoria', () => {
  cy.get('#buttonCreate').click();
});

Then("Eu estou na página {string}", (pagina) => {
  cy.visit('/supplier/categories');
});

Then('Eu vejo a categoria de nome {string}', (nomeCategoria) => {
  cy.get('#categories').should('contain', nomeCategoria);
});