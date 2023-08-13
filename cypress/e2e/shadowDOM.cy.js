//Shadow dom are elemetns inside the dom but isolate from your app
describe('This is an example on how you have to use the shadow DOM elements', () => {

    it('Navigating to the page with shadow dom elements', () => {
        cy.visit('https://the-internet.herokuapp.com/shadowdom');
        //Use the shadow() function just after getting the elements
        // cy.get('ul > :nth-child(2)').shadow().should('have.text','In a list!')
    });
})