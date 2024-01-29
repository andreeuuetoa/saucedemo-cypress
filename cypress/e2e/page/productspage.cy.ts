describe('Products page tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('#react-burger-menu-btn').click();
    cy.get('#reset_sidebar_link').click();
    cy.get('#react-burger-cross-btn').click();
  });

  it('shows the products page title', () => {
    cy.get('.title').contains('Products');
  });
});
