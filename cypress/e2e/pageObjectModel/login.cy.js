import Login from '../../pages/login.page'

//in a variable we handle the timport to a new import
const loginHome = new Login

describe('test description', () => {
  before('Login in to the Home Page',() => {
     loginHome.login()
     
  });
  it('Test description', () => {
     cy.get('h2').should('include.text', 'Secure')
  });
})