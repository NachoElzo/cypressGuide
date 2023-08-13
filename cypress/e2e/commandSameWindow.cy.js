/*
//You can fin this command in the file commands.js
describe('Handling Same Window', () => {
    it ('Same Window',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        //is makes the same function that .invoke remove attribute
        cy.get('.example > a').sameWindow().click()
        cy.get('h3').should('have.text','New Window')
        //How we can call the command same window to handle same windows in the app
    })
})

*/