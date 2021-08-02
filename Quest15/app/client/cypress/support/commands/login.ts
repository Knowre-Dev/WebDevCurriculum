Cypress.Commands.add('login', (userName, password) => {
  cy.request({
    method: 'POST',
    url: 'https://localhost:8000/graphql',
    body: `{"variables":{"loginInput":{"userName":"${userName}","password":"${password}"}},"query":"mutation ($loginInput: LoginInput!) {\\n  login(input: $loginInput) {\\n    accessToken\\n    __typename\\n  }\\n}\\n"}`,
  })
    .its('body')
    .then(body => {
      console.log(body);
    });
});
