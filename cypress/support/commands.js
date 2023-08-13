
// Type of commands
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Child command for get a text from an iframe 
//creates a command named iframe, recives an element in where iframe = $iframe selector 
//prevSubject comes from the child command (child = require other process to be executed (in this case getting the frame and the element)
//accepting 2 parameters #iframe dom and the selector of the element
Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, selector) => {
    Cypress.log({
        //return the iframe name in the console
        name: 'iframe',
        consolePromps() {
            return {
                iframe: $iframe,
            }
        }

    })
    //resolves the prommise with the iframe, selector
    return new Promise((resolve => {
        resolve($iframe.contents().find(selector))
    }))

})
Cypress.Commands.add('login', () => {
    cy.visit('https://the-internet.herokuapp.com');
    cy.request({
        method: 'POST',
        //This is the url of the api / you can see it in the netwrok response after login in the devtools 
        url: '/authenticate',
        form: true,
        body: {
            username: 'tomsmith',
            password: 'SuperSecretPassword!'
        },
    })
    //we validate that the cookie exist (cookie inside the login request in devtools)
    cy.getCookie('rack.session').should('exist')
    //we visit the page to make sure that we log in with the credentials
    cy.visit('https://the-internet.herokuapp.com/secure');
})

Cypress.Commands.add('sameWindow',(url) => {
    cy.on('window:before:load',(win)=>{
        cy.stub(win, 'open').as('sameWindowOpen').callsFake(()=>{
            cy.visit(url)
        })
    })
})