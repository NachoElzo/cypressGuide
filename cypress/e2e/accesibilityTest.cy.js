import 'cypress-axe'

//for this case we use cypress-axe library to get accessibility results
describe ('We are going to do accesibility test',()=>{
    it('Analazing home Page with accessibility parameters',()=>{
        cy.visit('https://the-internet.herokuapp.com/');
      
        cy.injectAxe()
         //check all elements in the page
        // cy.checkA11y()

        //check the element h1
        cy.checkA11y('h1')

        cy.checkA11y('h1')
        

    })
})