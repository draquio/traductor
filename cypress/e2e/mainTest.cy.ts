describe("Dashboard rendering", () => {
  
  beforeEach(()=>{
    cy.visit("http://localhost:5173/");
  })
  it("it shoud render the defaults element on the web", () => {
    cy.get('[aria-label="traducir_a"]').should("exist");
    cy.get('[aria-label="text_area_translate"]').should("exist");
    cy.get('[aria-label="result_box"]').should("exist");
    cy.get('[aria-label="traducir_a"]').should("exist");
  });

  it("it should tranlate text from spanish to english with word Hola where the return shoud be Hello", () => {
    cy.get(".text_area_box").type("hola");
    cy.intercept("POST", "**/translate?to%5B0%5D=*&**").as("translateRequest");
    cy.get(".translate_button").click();
    cy.wait("@translateRequest");
    cy.get(".text_area_box_result").should("contain", "Hello");
  });

  it("it should tranlate text from english to spanish with word Welcome where the return shoud be Bienvenido", () => {
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

  it("it should tranlate text from spanish to portugues (Brasil) with word 'Me gusta esto' where the return should be 'Eu gosto disso'", () => {
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

  it("it should tranlate text from english to portugues (Brasil) with word 'Have a good day' where the return should be 'Tenha um ótimo dia'", () => {
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
});
