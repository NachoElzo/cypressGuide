
describe('Login with api', () => {

    it('Basic Authorization Log passing credentials in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth/'),
            cy.get('p').should('include.text', 'Congratulations')
    })

    it('Form API Authentication', () => {
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
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    });
})