/*
describe('Login store sesion', () => {

    it('Login Storing the sesion', () => {
        cy.session('Sesion user tomsmith', () => {
                cy.visit('https://the-internet.herokuapp.com/login');
                cy.get('h2').should('have.text', 'Login Page')
                cy.get('h4').should('contain.text', 'This is where you can log into the secure area. Enter ')
                //the login is in a form
                cy.get('#login').within(($form) => {
                cy.get('input[name="username"]').clear().type('tomsmith')
                //throws and error in timeout 5000
                cy.get('input[name="password"]', { timeout: 5000 }).clear().type('SuperSecretPassword!')
                cy.root().submit()
                cy.log('The user login correctly to the home page ')
            })
        })
        
        cy.getAllCookies()
        //5 cookies in the array, 0 have property name = 'optimizelyPendingLogEvents'
        cy.getCookies().should('have.length',4).then((cookies)=>{
        expect(cookies[0]).to.have.property('name','optimizelySegments')
        cy.getCookie('optimizelySegments').should('exist')
        // cy.getCookies('optimizelyPendingLogEvents').should('have.property','value','123')
        })
        cy.clearCookies()
        //after clear cookies (should be an array with length 0)
        cy.getCookies().should('have.length',0)
        //singular cookie function
        cy.clearCookie('optimizelyPendingLogEvents')
        //we check that the cookie deleted is not longer exist
        cy.getCookie('optimizelyPendingLogEvents').should('not.exist')
        //validating that the cookie do not exist
        cy.getCookie('createdByAutomation').should('not.exist')
        //creating the cookie
        cy.setCookie('createdByAutomation','cookieValue')
        //validating that the cookie exist
        cy.getCookie('createdByAutomation').should('exist')

    })
})
*/