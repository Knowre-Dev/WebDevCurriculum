import 'cypress-localstorage-commands';

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('getBySelLike', (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

Cypress.Commands.add('login', (userName, password) => {
  cy.request({
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
    url: 'https://localhost:8000/graphql',
    body: `{"variables":{"loginInput":{"userName":"${userName}","password":"${password}"}},"query":"mutation ($loginInput: LoginInput!) {\\n  login(input: $loginInput) {\\n    accessToken\\n    __typename\\n  }\\n}\\n"}`,
  })
    .its('body')
    .then(body => {
      window.localStorage.setItem('accessToken', `Bearer ${body.data.login.accessToken}`);
    });
});
