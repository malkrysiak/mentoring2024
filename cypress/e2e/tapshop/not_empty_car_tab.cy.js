describe('Empty car tab', () => {
 

  it('should check if car tab is empty', () => {
    cy.visit('https://tapsshop.pl/');

    // go to Sklep tab and add some item to the cart
    cy.get('li:contains("Strona główna")').should("be.visible")
     cy.get('li:contains("Sklep")').first().click();
     cy.get('a:contains("Dodaj do koszyka")').first().click();
     cy.wait(500); 

    // check if the tabs are clickable
    cy.get('li:contains("Koszyk")').first().click()
    cy.get(".woocommerce-cart-form__cart-item.cart_item").should("be.visible");

  });})
