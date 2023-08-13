describe('This is test', () => {
    beforeEach(() => {
        cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing/')
    })

    it('This is the first test', () => {
        //Get the contained text of an item
        //we can use the command pause in order to pause the execution and debug in the cypress UI
        cy.get('.col > :nth-child(3)').pause().should('contain.text', 'Cypress').pause()
        //select a link with text 'www.freerangetesters.com'
        //debug function will print the object information in the developer tool of the cypress UI (Inspect - console)
        cy.get('a[href*="www.freerangetesters.com"]').debug().pause()
        //other way to debug in the cypress UI ('This will not works in the console execution')
        cy.log('We are going to debug this in the UI')
        //wait not recomended
        cy.wait(2000)

    })
    
})