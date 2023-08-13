const testData = require('../fixtures/validateText.json')
describe('This test will validate same object with a test file', () => {
    it('Validatin that title: ' + testData.title + ' it is correct', () => {
        testData.forEach((testData) => {
            cy.visit(testData.url);
            cy.get('h3').should('have.text', testData.text)
        })
    });
})





