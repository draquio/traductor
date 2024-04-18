describe('Testing mobile version of Web', () => {
  beforeEach(()=>{
    cy.visit("http://localhost:5173/");
  })

  it("it should tranlate text from english to spanish with word Welcome where the return shoud be Bienvenido on Samsung Note 9", () => {
    cy.viewport('samsung-note9')
    cy.get('.ui.dropdown').click();
    cy.get('.ui.dropdown input.search').type('Español');
    cy.contains('.item', 'Español').click();
    cy.get('.ui.dropdown').should('contain', 'Español');
    cy.get(".text_area_box").type("Welcome");
    cy.intercept("POST", "**/translate?to%5B0%5D=*&**").as("translateRequest");
    cy.get(".translate_button").click();
    cy.wait("@translateRequest");
    cy.get(".text_area_box_result").should("contain", "Bienvenido");
  });

  it("it should tranlate text from spanish to portugues (Brasil) with word 'Me gusta esto' where the return should be 'Eu gosto disso' on Iphone x", () => {
    cy.viewport('iphone-x');
    cy.get('.ui.dropdown').click();
    cy.get('.ui.dropdown input.search').type('Portugués');
    cy.contains('.item', 'Portugués (Brasil)').click();
    cy.get('.ui.dropdown').should('contain', 'Portugués');
    cy.get(".text_area_box").type("Me gusta esto");
    cy.intercept("POST", "**/translate?to%5B0%5D=*&**").as("translateRequest");
    cy.get(".translate_button").click();
    cy.wait("@translateRequest");
    cy.get(".text_area_box_result").should("contain", "Eu gosto disso");
  });

  it("it should tranlate text from english to portugues (Brasil) with word 'Have a good day' where the return should be 'Tenha um ótimo dia' on Samsung s10", () => {
    cy.viewport("samsung-s10");
    cy.get('.ui.dropdown').click();
    cy.get('.ui.dropdown input.search').type('Portugués');
    cy.contains('.item', 'Portugués (Brasil)').click();
    cy.get('.ui.dropdown').should('contain', 'Portugués');
    cy.get(".text_area_box").type("Have a good day");
    cy.intercept("POST", "**/translate?to%5B0%5D=*&**").as("translateRequest");
    cy.get(".translate_button").click();
    cy.wait("@translateRequest");
    cy.get(".text_area_box_result").should("contain", "Tenha um ótimo dia");
  });
})