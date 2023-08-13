// describe('Intercepting Request', () => {
//     it('Test description', () => {
//         cy.visit('https://jsonplaceholder.typicode.com/');
//         //Intercept all the GET method of the page
//         //you can add paths or regular expresions 
//         cy.intercept('GET')
//         //Intercept all the POST method of the page
//         cy.intercept('POST')

//         //stab data, responses, adding status 500 and a body name
//         cy.intercept('GET', {
//             status: 500,
//             body: {
//                 name: 'Stabing the body response'
//             }
//         })
//         })

//         //Handy inctercept method to recreate data in a GET request
//         it.only('Simulate a GET with stab data (FAKE DATA)', () => {
//             const examplePost = [{
//                 userId: 1,
//                 id: 1,
//                 title: 'FAKE TITLE',
//                 body: 'FAKE BODY FAKE BODYFAKE BODYFAKE BODYFAKE BODY'
//             },
//             {
//                 userId: 2,
//                 id: 2,
//                 title: 'FAKE TITLE 2',
//                 body: 'THIS IS STAB DATA FAKE DATA'
//             }];
            
//             //interceot the get method add examplePost as body 
//             cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', examplePost).as('getPosts')
//             //We navigate into the ui that contains the post to check the changes in the data
//             cy.visit('https://jsonplaceholder.typicode.com/')
//             cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click()
//             cy.wait('@getPosts');
//     });
  
// })