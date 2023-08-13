//Store the session in cache in order to repit the login process

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
    });
})
