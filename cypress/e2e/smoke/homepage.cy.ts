describe('Home page test', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get(".login_logo").contains("Swag Labs");
  })
})

describe('Log in from home page', () => {
  it('checks for log-in form on the home page', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get('#user-name').type('standard_user');
  })
});
