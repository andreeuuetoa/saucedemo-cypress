describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('shows the products page', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.title').contains('Products');
  });

  it('shows the error message: incorrect credentials', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();

    const errorMessage = 'Epic sadface: Username and password do not match any user in this service';
    cy.get('.error-message-container').contains(errorMessage);
  });

  it('shows the error message: user is locked out', () => {
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    const errorMessage = 'Epic sadface: Sorry, this user has been locked out.';
    cy.get('.error-message-container').contains(errorMessage);
  });
});
