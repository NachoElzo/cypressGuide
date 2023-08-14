describe('Validating the images list', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_content')
    });
    it('Validating Elements', () => {
        //Gets a div with 3 elemtns, if the list is not equal to 3 throw an error
        cy
        .get('div[class="large-2 columns"]')
        //with then instead should will throw an error if the position of the elements changes
        .should(item =>{
            if (item.length !==3) {
                throw new Error('not enought elements')
            }
            expect(item[0]).to.contains.text('')
            expect(item[1]).to.contains.text('')
            expect(item[2]).to.contains.text('')
            
        })

    });
})