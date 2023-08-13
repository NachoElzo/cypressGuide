class Login {

//nacigation section
    navigateToLoginPage() {
        cy.visit('https://the-internet.herokuapp.com/login')
    };

//get and returning web objects
    sendCredentialsToUsername() {
        return cy.get('input[name="username"]')

    }

    sendCredentialsToPassword() { 
        return cy.get('input[name="password"]')
    }

   loginButton (){
         return cy.get('.radius')
    }

//actions Over elements
    login() {
        this.navigateToLoginPage()
        this.sendCredentialsToUsername().type('tomsmith')
        this.sendCredentialsToPassword().type('SuperSecretPassword!')
        this.loginButton().click()
    
    }

}

export default Login