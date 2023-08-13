//servers reponses
//100 - 199 information respones
//200 -299 sucessfully respones //  200 = OK , 201 = CREATED, 202 ACCEPTED
//300 - 399 redirections 
//400 - 499 client error // 400 BAD REQUEST , 403 = FORBIDDEN, 404 = NOT FOUND
//500 -599 server error //500 INTERNAL SERVER ERROR

//GET: is used to request data from a specified resource.

describe('GET users', () => {
    it('Test description', () => {
        cy.request('https://reqres.in/api/users?page=2')
          .then((response) => {
           expect(response.status).to.have.eq(200);
           // assertion code here
        });
    })
    it('GET Lenght of the body', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
          .its('body')
          .should('have.length',100)
        });

    it('GET Title from body', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/1')
          .its('body')
          .should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        });
    })
