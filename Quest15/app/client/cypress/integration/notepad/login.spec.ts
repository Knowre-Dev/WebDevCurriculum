import { CONFIG } from '../../fixtures/fixture';

describe('login', () => {
  beforeEach(() => {
    cy.visit(CONFIG.loginPage);
  });
  it('login success', () => {
    cy.get('[data-testId=username]').type(CONFIG.testUserName);
    cy.get('[data-testId=password]').type(CONFIG.testUserPassword);

    cy.get('[data-testId=login-button]').click();

    cy.location().should(location => {
      expect(location.href).to.eq(CONFIG.mainPage);
    });
  });

  it('login fail', () => {
    cy.get('[data-testId=username]').type('guest00');
    cy.get('[data-testId=password]').type('guest00');

    cy.get('[data-testId=login-button]').click();

    cy.on('window:alert', (txt: string) => {
      const messages = ['Invalid user', 'user not found'];
      expect(messages.includes(txt)).is.true;
    });
  });
});
