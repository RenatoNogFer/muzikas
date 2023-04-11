import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Eu estou na página {string}', (pageName) => {
  // Implement code to navigate to the given page
});

Given('Eu vejo a categoria de nome {string}', (categoryName) => {
  // Implement code to locate and verify the category with the given name exists
});

Given('A categoria de nome {string} já existe no sistema', (categoryName) => {
  // Implement code to add a category with the given name to the system
});

When('Eu altero o nome da categoria de nome {string} para {string}', (oldCategoryName, newCategoryName) => {
  // Implement code to locate and edit the category with the given old name to the new name
});

When('Eu confirmo a edição da categoria', () => {
  // Implement code to confirm the category edit
});

Then('Eu ainda estou na página {string}', (pageName) => {
  // Implement code to verify that the current page is the given page
});

Then('Uma mensagem de erro é exibida', () => {
  // Implement code to verify that an error message is displayed
});

Then('A categoria de nome {string} não passa a ter o nome {string}', (oldCategoryName, newCategoryName) => {
  // Implement code to verify that the category name has not been changed to the new name
});