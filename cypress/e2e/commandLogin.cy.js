//You can fin login command in commands.js
describe('test description', () => {
   beforeEach(() => {
    //we call the command login from commands.js
      cy.login()
   });
   it('verifien', () => {
    cy.get('.subheader').should('include.text','Welcome to the Secure Area')
   });
})