//PUT: is used to send data to a server and update a resource.
describe('This is the post test page', () => {
    it('Test description', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/2',
            body: {
                title: 'adding a value to the body',
                body: 'adding a body to the request'
            },
        }).then((response) => {
            expect(response.body).to.have.property('body', 'adding a body to the request');
        });
    });

})