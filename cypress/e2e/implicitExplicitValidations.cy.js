describe('Implicit Validations', () => {
//You can check cypress asserts documentation 
//https://docs.cypress.io/guides/references/assertions#__docusaurus_skipToContent_fallback
  
beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/inputs');
  });
  it('Implicit validations', () => {
    //We use "and" to make implicit validations
    cy.get('h3').should('have.text','Inputs')
    .and('be.visible')
    .and('not.be.checked')
  });
  it ('Explicit Validations',()=>{
    cy.get('h3')
    //h3 contains a text Inputs equals to Inputs
    expect('Inputs').to.equals('Inputs')
    //Validatin same word with out caps
    expect('Inputs').not.equals('inputs')
    
  })
})