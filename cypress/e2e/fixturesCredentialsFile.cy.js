//You can fin the credentials in folder fixtures, file credentials.json
describe('Login With Credentials', () => {
   before(function() {
      cy.visit('https://the-internet.herokuapp.com/login')
      //function that search file credentials in fixture folder
      cy.fixture('credentials').then(function(testdata){
      //creating the object from the above function
         this.testdata=testdata
      })
   })

   it('Login Form', function () {
   //call test data file.username and .password
           cy.get('input[name="username"]').type(this.testdata.username)
           cy.get('input[name="password"]').type(this.testdata.password)
           cy.get('form').contains('Login').click()
           cy.url().should('contain','/secure')
       })
   })

