describe('Cypress Tests', () => {
    it('Должна успешно загрузиться главная страница', () => {
        cy.visit('/');
        cy.url().should('include', '/');
      });
      it('Следует найти и подтвердить наличие определенного элемента', () => {
        cy.visit('/');
        cy.get('.app').should('be.visible');
      });
    });
