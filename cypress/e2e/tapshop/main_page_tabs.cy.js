describe('Main Page Tab', () => {
 

  it('should check if all tabs are visible', () => {
    cy.visit('https://tapsshop.pl/');

    // check if the tabs are visible
    cy.get('li:contains("Strona główna")').should("be.visible")
    cy.get('li:contains("Koszyk")').should("be.visible")
    cy.get('li:contains("Moje konto")').should("be.visible")
    cy.get('li:contains("Zamówienie")').should("be.visible")
    cy.get('li:contains("Sklep")').should("be.visible")
    cy.get('li:contains("Oh no!")').should("be.visible")


    // check if the tabs are clickable
    cy.get('li:contains("Koszyk")').first().click()
    cy.get ("header h1:contains('Koszyk')").should("be.visible")
    cy.get('li:contains("Moje konto")').first().click();
    cy.get ("header h1:contains('Moje konto')").should("be.visible")
    cy.get('li:contains("Zamówienie")').first().click()
    cy.get ("header h1:contains('Koszyk')").should("be.visible")
    cy.get('li:contains("Sklep")').first().click()
    cy.get ("header h1:contains('Sklep')").should("be.visible")

  });})
