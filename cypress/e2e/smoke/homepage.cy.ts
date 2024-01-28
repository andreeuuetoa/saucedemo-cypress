describe('Home page test', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get(".login_logo").contains("Swag Labs");
  })
})
