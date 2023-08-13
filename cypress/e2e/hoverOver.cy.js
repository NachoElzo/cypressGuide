describe ('',()=>{
    it('Hover over invisible elements', () => {
       cy.visit('https://the-internet.herokuapp.com/hovers')
       //force a hidde element to be available 
       //we remove the tribute target and we can continue the test in the same page
    cy.get('#content > div > div:nth-child(3) > div > a').invoke('removeAttr','target').click({force:true})
    //validates the h1 of the linked page
    cy.get('h1')

    });
})