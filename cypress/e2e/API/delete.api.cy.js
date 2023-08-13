describe('This is the poage to delete request', () => {
   it('Test description', () => {
      cy.request({
          method: 'DELETE',
          url: 'https://jsonplaceholder.typicode.com/posts/1',
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
   });
})