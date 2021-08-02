import 'cypress-localstorage-commands';
import { CONFIG } from '../../fixtures/fixture';

describe('Editor features', () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
    cy.login(CONFIG.testUserName, CONFIG.testUserPassword);
    cy.saveLocalStorage();
  });
  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit(CONFIG.mainPage);
  });
  after(() => {
    cy.clearLocalStorage();
  });

  it('문서 생성', () => {
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('hello');
    });

    cy.get('[data-testId=tab]').should('not.exist');

    cy.get('[data-testId=new-button]').click();
    cy.get('[data-testId=tab]').should('have.length', 1);
  });

  it('문서 저장', () => {
    cy.get('[data-testId=tab]').first().click();

    cy.get('[data-testId=tab-status]').should('have.class', 'tab-status-saved');

    cy.get('[data-testId=editor-input]').click().type('text test');

    cy.get('[data-testId=tab-status]').should('not.have.class', 'tab-status-saved');

    cy.get('[data-testId=save-button]').click();
  });

  it('저장된 문서 리로드', () => {
    cy.get('[data-testId=tab]').should('have.length', 1);
    cy.get('[data-testId=editor-input').should('have.value', 'text test');
  });

  it('문서삭제', () => {
    cy.get('[data-testId=close-button]').click();

    cy.get('[data-testId=tab-status]').should('not.exist');
  });

  it('logout', () => {
    cy.get('[data-testId=logout-button]').click();
    cy.location().should(location => {
      expect(location.href).to.eq(CONFIG.loginPage);
    });
  });
});
