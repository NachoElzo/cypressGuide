describe('Login to the app', () => {
    beforeEach('Navigate to the login page', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });
    it('Validate Elements of the login page', () => {
        cy.get('h2').should('have.text', 'Login Page')
        cy.get('h4').should('contain.text', 'This is where you can log into the secure area. Enter ')

    });
//This is a login form, objects outside the the function will not be findet
    it('Login Form', () => {
        cy.get('#login').within(($form) => {
            cy.get('input[name="username"]').clear().type('tomsmith')
            //throws and error in timeout 5000
            cy.get('input[name="password"]',{ timeout: 5000 }).clear().type('SuperSecretPassword!')
            cy.root().submit()
            cy.log('The user login correctly to the home page ')
        })
    });
})
