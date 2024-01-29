describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('checks that the home page loads', () => {
    cy.get('.login_logo').contains('Swag Labs');
  })

  it('checks for log-in form on the home page', () => {
    cy.get('#user-name').type('standard_user');
  })
});
