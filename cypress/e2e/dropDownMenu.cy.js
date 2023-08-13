describe ('',()=>{
    it('How to handle drop downs menus', () => {
       cy.visit('https://the-internet.herokuapp.com/dropdown');
       //Select by text
       cy.contains('Dropdown').click()
       cy.get('#dropdown').select('Option 2')
       //Select by position
       cy.get('#dropdown').select(1)

    });
})