describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Shows the products page', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.title').contains('Products');
  });

  it('Shows the error message: incorrect credentials', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();

    const errorMessage = 'Epic sadface: Username and password do not match any user in this service';
    cy.get('.error-message-container').contains(errorMessage);
  });
});
