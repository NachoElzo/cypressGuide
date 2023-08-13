// You can see this command in the file commands.js
describe('we are going to get the text inside an iframe ', () => {

   it('Getting the text inside an iframe', () => {
      cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
      cy.get('#frame')
      //Calls the command in command.js named iframe
      .iframe('body #button-find-out-more > b')
      .should('include.text','Find Out More!')

   })
})