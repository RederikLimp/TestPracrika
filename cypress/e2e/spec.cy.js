describe('template spec', () => { 
 
  it('Переход на страницу по ссылке', () => {
    cy.visit('https://dev.profteam.su/');
    cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label').click();
    cy.url().should('eq', 'https://dev.profteam.su/vacancies');
  });
  it('Проверка доступа к личному кабинету', () => {
    cy.visit('https://dev.profteam.su/login');
    cy.get('.form-input--text').type('testerStudent');
    cy.get('.form-input--password').type('Password1');
    cy.wait(1000); 
    cy.get('.form__buttons > :nth-child(3)').click();
    cy.get('.page-title').should('contain', 'Личный кабинет');
    cy.get('.menu-item__item-name')
    cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""] > .button');
  });
  it('Проверка и отправка формы', () => {
    cy.visit('https://dev.profteam.su/login#b');
    cy.get('.form-input--text').type('testerStudent');
    cy.get('.form-input--password').type('Password1');
    cy.wait(1000); 
    cy.get('.form__buttons > :nth-child(3)').click();
    cy.url().should('include', '/account/main');
  });
  
  it('Проверка процесса регистрации', () => {
    cy.visit('https://dev.profteam.su/registration');

    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('newfUser');
    cy.get('.form-input--email').type('newusfer@example.com');
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Password12А3');
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Password12А3');

    cy.get(':nth-child(4) > .button').click();

    cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Пупес');
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Ахмедоато');
    cy.get(':nth-child(3) > .button').click();
  });
  it('Проверка создания потребности', () => {
    cy.visit('https://dev.profteam.su/login#b');
    cy.get('.form-input--text').type('testerEmployer');
    cy.get('.form-input--password').type('Password1');
    cy.wait(1000); 

    cy.get('.form__buttons > :nth-child(3)').click();
    cy.wait(2000); 

    cy.visit('https://dev.profteam.su/account/needs#b');
    cy.get('.needs-block__filters-wrapper > .button').click();

    cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text').type('Наливайщик чая.');
    cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area').type('Что б чай наливал');
    cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area').type('Умение пользоваться чайником, и выкидывать заварку.  АААА ещё чтоб забавлял холодной водичкой.');
    
    cy.wait(2000); 
    cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click({ force: true });
});
it('Проверка процесса регистрации Сетевой город.', () => {
      cy.visit('https://dev.profteam.su/registration');
  
      cy.get('.button-login__network-city-desktop').click();

      cy.get('.form__labels > :nth-child(1) > .form-control--medium > .form-input--text').type('newUser');
      cy.get(':nth-child(2) > .form-control--medium > .form-input--password').type('Password12А3');
  
      cy.get('.login-form__button > .button').click();
  //Проверка зарегестрирован ли пользователь

  cy.get('.form-input--text').type('newUser');
  cy.get('.form-input--password').type('Password12А3');
  cy.get('.form__buttons > :nth-child(3)').click(1000);
    });
})


