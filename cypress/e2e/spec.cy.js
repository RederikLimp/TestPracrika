describe('template spec', () => { 
 
  it('Переход на страницу по ссылке', () => {
    cy.visit('https://dev.profteam.su/');
    cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label').click();
    cy.url().should('eq', 'https://dev.profteam.su/vacancies');
  });
  it('Проверка и отправка формы', () => {
    cy.visit('https://dev.profteam.su/login');
    cy.get('.form-input--text').type('testerStudent');
    cy.get('.form-input--password').type('Password1');
    cy.wait(2000); 
    cy.get('.form__buttons > :nth-child(3)').click();
    cy.url().should('eq', 'https://dev.profteam.su/account/main');
  });
  
})
