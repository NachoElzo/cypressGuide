describe('test description', () => {
   it('select a value from a dynamic table', () => {
    cy.visit('https://chercher.tech/practice/dynamic-table');
    //prev gets positioned in the oprevius element of the table
    //prev, goes to the previous element then find the element inside the row (checkbox)
    cy.contains('td','facebook.com').prev().find('input').click()
    //next goes to the next element inside the table and compare the text in the row
    cy.contains('td', 'Chercher.tech').next().should('have.text','Future Technologies')
   });

})