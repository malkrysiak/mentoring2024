describe('Empty car tab', () => {
 

  it('should check if car tab is empty', () => {
    cy.visit('https://tapsshop.pl/');

    //go to Koszyk tab
    cy.get('li:contains("Strona główna")').should("be.visible")
    cy.get('li:contains("Koszyk")').should("be.visible")
     cy.get('li:contains("Koszyk")').first().click();
    cy.get ("header h1:contains('Koszyk')").should("be.visible")

    //check if the message appears
    cy.get(".cart-empty.woocommerce-info").contains("Twój koszyk aktualnie jest pusty.").should("be.visible");

  });})
