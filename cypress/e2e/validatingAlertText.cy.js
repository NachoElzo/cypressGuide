describe('Validating external alerts', () => {
  it('Validating the text of a external alert', () => {
     cy.visit('https://the-internet.herokuapp.com/context_menu');
     cy.get('#hot-spot').rightclick()
     //triggers the hidden alert 
     cy.get('#hot-spot').invoke("trigger","contextmenu")
     //Triggers and validates the text inside the alert
     cy.on("window:alert]", (alert) =>{
        expect(alert).to.equal("You have selected a context menu")
     } )
  });
})