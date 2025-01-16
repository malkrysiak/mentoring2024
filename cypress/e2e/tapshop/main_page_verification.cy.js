describe('Main Page Verification', () => {
 

  it('should check if main page is present', () => {
    cy.visit('https://tapsshop.pl/');

    // check if logo exists
    cy.get('.custom-logo-link').should("be.visible")
   

    // check if text is viisble
    cy.get("article div p").contains("TESTOWY SKLEP DO TESTOWANIA").should("be.visible")
  });})
