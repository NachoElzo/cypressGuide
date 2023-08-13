describe ('Invoke events in the DOM',()=>{
    it('Invoking Elements',()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.contains(' checkbox 1').should('not.to.be.checked')
        let checkBox1 = cy.get('input[type="checkbox"]').eq(0).check()
        checkBox1.should('be.checked')
        let checkBox2 = cy.get('input[type="checkbox"]').eq(1)
        checkBox2.should('be.checked')
        checkBox1.uncheck().should('not.to.be.checked')
    })
})