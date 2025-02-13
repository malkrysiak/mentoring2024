describe('Ordering a product', () => {
 

    it('should check ordering process', () => {
      cy.visit('https://tapsshop.pl/');
      cy.get('li:contains("Strona główna")').should("be.visible")

      //go to Sklep
      cy.get('li:contains("Sklep")').first().click()
      cy.get ("header h1:contains('Sklep')").should("be.visible")

      //click the product we want to buy
      cy.get(`li a[href="https://tapsshop.pl/produkt/beanie/"]`).parent().contains("Dodaj do koszyka").click();

      //click Zobacz koszyk
      cy.get("a.added_to_cart ").click();

      //click Przejdz do platnosci
      cy.intercept("https://tapsshop.pl/?wc-ajax=update_order_review").as("update_order_review");
      cy.get(`a.checkout-button `).click();
      cy.wait("@update_order_review");

      //fulfill the form
      cy.intercept("https://tapsshop.pl/?wc-ajax=checkout").as("checkout");
    cy.get(`input[name="billing_first_name"]`).type("name");
    cy.get(`input[name="billing_last_name"]`).type("last name");
    cy.get(`input[name="billing_address_1"]`).type("address");
    cy.get(`input[name="billing_postcode"]`).type("11-222");
    cy.get(`input[name="billing_city"]`).type("city");
    cy.get(`input[name="billing_phone"]`).type("123456789");
    cy.get(`input[name="billing_email"]`).type("m@wp.pl");
    cy.get("button").contains("Kupuję i płacę").click();
    cy.wait("@checkout");


    //check if the order was successful
    cy.get("h1").contains("Zamówienie otrzymane").should("be.visible");
    cy.get("div").contains("Dziękujemy. Otrzymaliśmy Twoje zamówienie.")
    cy.get("li").should("contain.text", "Numer zamówienia:");
    cy.get("section h2").contains("Szczegóły zamówienia").should("be.visible");

    });})
  