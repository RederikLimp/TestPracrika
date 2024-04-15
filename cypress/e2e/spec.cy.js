describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su/')
  })
  it('Должна успешно загрузиться главная страница', () => {
    cy.visit('https://dev.profteam.su/');
    cy.url().should('include', '/');
  });
  it('Следует найти и подтвердить наличие определенного элемента', () => {
    cy.visit('https://dev.profteam.su/');
    cy.get('.page-title').should('be.visible');
  });
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
    cy.get('.menu-item__name').should('be.visible');
  });
  
})
