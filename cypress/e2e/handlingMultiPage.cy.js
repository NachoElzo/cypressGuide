describe('Multi page', () => {
    it ('multi page',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        //Remove attribute, target from invoke in the click event, this works for handling multi tabs
        //the flow will continue in the browser instance
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')
        //How we can call the command same window to handle same windows in the app
    })
})


