describe('Main Page Tab', () => {
 

    it('should check if all tabs are visible', () => {
      cy.visit('https://tapsshop.pl/');
  
      // check if search field exists
      cy.get('#woocommerce-product-search-field-0').should("be.visible")

      //eneter value that exists
    cy.get('#woocommerce-product-search-field-0').click().type("Beanie").type('{enter}')
        cy.get("div h1:contains('Beanie')").should("be.visible")
  
      // enter value that doesn;t exists
      cy.get('#woocommerce-product-search-field-0').click().type("gosia").type('{enter}')
        cy.get(".woocommerce-info").contains("Nie znaleziono produktów, których szukasz.").should("be.visible");
    });})
  