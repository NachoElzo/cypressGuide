//POST: is used to send data to a server to create a resource.

describe ('This is the post test page',()=>{
it('POST message in the db',()=>{
    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        body: {
            "userId": 1,
            "id": 101,
            "title": "test message",
            "body": "Leaving my message here"
        },
      }).then((response) => {
        expect(response.body).to.have.property('body', 'Leaving my message here')
      });
})
})