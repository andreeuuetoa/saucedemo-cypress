describe('Products page tests', () => {
  beforeEach(() => {
    cy.visit('/');

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

  it('the cart is initially empty', () => {
    cy.get('.shopping_cart_link').should('be.empty');
  });

  it('clicking on "Add to cart" fills the cart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_link').should('not.be.empty');
  });
});
