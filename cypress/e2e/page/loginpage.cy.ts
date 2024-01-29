describe('Successful login', () => {
  it('Shows the products page', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.title').contains('Products');
  })
});
