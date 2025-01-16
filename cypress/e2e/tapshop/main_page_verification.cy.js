describe('Main Page Tab', () => {
 

  it('should check if all tabs are visible', () => {
    cy.visit('https://tapsshop.pl/');

    // check if logo exists
    cy.get('.custom-logo-link').should("be.visible")
   

    // check if text is viisble
    cy.get("article div p").contains("TESTOWY SKLEP DO TESTOWANIA").should("be.visible")
  });})
