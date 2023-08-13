describe('Handling Dynamic content', () => {
    it('Get the image', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_content');
        //for img in the DOM
        cy.get('img')
        //fisrt img positioned in the DOM
        cy.get('img').first().should('be.visible')
         //last img positioned in the DOM
        cy.get('img').last().should('be.visible')
        //the position of the img elements
        cy.get('img').eq(0).should('be.visible')
        cy.get(':nth-child(3) > a').should('have.text','click here')
        //Get the parent object of the element (you will see it in the ui console)
        cy.get(':nth-child(1) > .large-2 > img').parent()
        //get the childen object of the element  (you will see it in the ui console)
        cy.get(':nth-child(7) > #content').children(1)
    
    });
})