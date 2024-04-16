describe('Отрицательные', () => { 
  it('Вывод ошибки при вводе неверных данных в поле авторизации', () => {
    cy.visit('https://dev.profteam.su/login');
    cy.get('.form-input--text').type('1');
    cy.get('.form-input--password').type('1');
    cy.wait(500); 
    cy.get('.form__buttons > :nth-child(3)').click();
    cy.get('.form-error > span').should('be.visible');
  });
  it('Вывод ошибки при вводе неверных данных в поле авторизации через сетевой город ', () => {
    cy.visit('https://dev.profteam.su/login');
    cy.get('.button-login__network-city-desktop').click();
    cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
.type('1');
cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
.type('1');
    cy.wait(500); 
    cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button')
.click();
    cy.get('.form-error > span').should('be.visible');
  });
  it('Вывод ошибки при вводе неверных данных в поле логин при регистрации', () => {
    cy.visit('https://dev.profteam.su/registration');
    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('1');
    cy.get(':nth-child(1) > .form-error > span').should('be.visible');
  });
  it('Вывод ошибки при вводе неверных данных в поле email при регистрации', () => {
    cy.visit('https://dev.profteam.su/registration');
    cy.get('.form-input--email').type('1');
    cy.get(':nth-child(2) > .form-error > span').should('be.visible');
  });
  it('Вывод ошибки при вводе неверных данных в поле password при регистрации', () => {
    cy.visit('https://dev.profteam.su/registration');
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('1');
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('1');
    cy.get(':nth-child(3) > .form-error').should('be.visible');
  });
  it('Вывод ошибки при вводе несовпадающих паролей в поле password при регистрации', () => {
    cy.visit('https://dev.profteam.su/registration');
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('1');
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('2');
    cy.get(':nth-child(4) > .form-error > span').should('be.visible');
    cy.wait(500); 
  });
  it('Вывод ошибки при вводе даты начала стажировки ранее сегодняшней даты', () => {
    cy.wait(500); 
    cy.visit('https://dev.profteam.su/login');
    cy.get('.form-input--text').type('testerEmployer');
    cy.get('.form-input--password').type('Password1');
    cy.wait(500); 
    cy.get('.form__buttons > :nth-child(3)').click();
    cy.wait(2000); 
    cy.visit('https://dev.profteam.su/account/internships');
    cy.get('[data-v-b4b9d629=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
    cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date')
.type('2022-12-12');
cy.get(':nth-child(4) > .form-error > span').should('be.visible');
  });
  it('Вывод ошибки при вводе срока стажировки менее 1 дня или более полугода', () => {
    cy.visit('https://dev.profteam.su/login#q');
    cy.get('.form-input--text').type('testerEmployer');
    cy.get('.form-input--password').type('Password1');
    cy.wait(500); 
    cy.get('.form__buttons > :nth-child(3)').click();
    cy.wait(2000); 
    cy.visit('https://dev.profteam.su/account/internships');
    cy.get('[data-v-b4b9d629=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
    cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control--responsive > .form-input--date')
.type('2024-12-12');
cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control--responsive > .form-input--date')
.type('2026-12-12');
cy.wait(500); 
cy.get(':nth-child(5) > .form-error > span').should('be.visible');
  });

it('Недопустимость изменения обязанностей в потребности в нулевое значение', () => {
  cy.visit('https://dev.profteam.su/login#q');
  cy.get('.form-input--text').type('testerEmployer');
  cy.get('.form-input--password').type('Password1');
  cy.wait(500);
  cy.get('.form__buttons > :nth-child(3)').click();
  cy.wait(2000);
  cy.visit('https://dev.profteam.su/account/needs');
  cy.wait(2000);
  cy.get(':nth-child(1) > .need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button__background-color-gray').click();
  cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area').type('{selectall}{backspace}');
  cy.wait(500);
  cy.get('.labels > :nth-child(3) > .form-error > span').should('be.visible');
});

it('Недопустимость изменения требований в потребности в нулевое значение', () => {
  cy.visit('https://dev.profteam.su/login#q');
  cy.get('.form-input--text').type('testerEmployer');
  cy.get('.form-input--password').type('Password1');
  cy.wait(500);
  cy.get('.form__buttons > :nth-child(3)').click();
  cy.wait(2000);
  cy.visit('https://dev.profteam.su/account/needs');
  cy.wait(2000);
  cy.get(':nth-child(1) > .need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button__background-color-gray').click();
  cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
.type('{selectall}{backspace}');
  cy.wait(500);
  cy.get(':nth-child(4) > .form-error > span').should('be.visible');
});
});
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

    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('newffgdfggfgfUser');
    cy.get('.form-input--email').type('newusffgfgdfedgfdfgr@example.com');
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
    cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click();
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

})
  // Пересоздание потребности
  it('Пересоздание потребности', () => {
  cy.visit('https://dev.profteam.su/login#b');
  cy.get('.form-input--text').type('testerEmployer');
  cy.get('.form-input--password').type('Password1');
  cy.wait(1000); 
  cy.get('.form__buttons > :nth-child(3)').click();
  
  cy.get('[href="/archive/requests"]')

  cy.get('[href="/archive/requests"] > .header__label').click();

  cy.get(':nth-child(2) > .menu-item__item-name').click();

  cy.get('.need-footer__button-wrapper > .button__background-color-light-blue').click();
  
  cy.get('.needs-block__content > .infinite-loader > :nth-child(1)').should('be.visible');
})


it('Проверка публикации потребностей', () => {
  cy.visit('https://dev.profteam.su/login#b');
  cy.get('.form-input--text').type('testerEmployer');
  cy.get('.form-input--password').type('Password1');
  cy.wait(1000); 
  cy.get('.form__buttons > :nth-child(3)').click();

  cy.get(':nth-child(6) > .menu-item__item-name').click();

cy.get(':nth-child(1) > .need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button__background-color-green').click();
cy.get(':nth-child(1) > .need-item__info-wrapper > .need-header > .need-header__title-wrapper > .entity__status > p').should('be.visible');
})

it('Проверка публикации вакансий', () => {
  cy.visit('https://dev.profteam.su/login#b');
  cy.get('.form-input--text').type('testerEmployer');
  cy.get('.form-input--password').type('Password1');
  cy.wait(1000); 
  cy.get('.form__buttons > :nth-child(3)').click();

  cy.get(':nth-child(7) > .menu-item__item-name').click();

  cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click();
  cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__title-wrapper > .entity__status > p').should('be.visible');
})

it('Проверка начала стажировки', () => {
  cy.visit('https://dev.profteam.su/login#b');
  cy.get('.form-input--text').type('testerEmployer');
  cy.get('.form-input--password').type('Password1');
  cy.wait(1000); 
  cy.get('.form__buttons > :nth-child(3)').click();

  cy.get(':nth-child(8) > .menu-item__item-name').click();

  cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click();
  cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-header > .internship-header__title-wrapper > .entity__status > p').should('be.visible');
})

it('Проверка Создания вакансии', () => {
  cy.visit('https://dev.profteam.su/login#b');
  cy.get('.form-input--text').type('testerEmployer');
  cy.get('.form-input--password').type('Password1');
  cy.wait(1000); 
  cy.get('.form__buttons > :nth-child(3)').click();

  cy.get(':nth-child(7) > .menu-item__item-name').click();

  cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
  cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('Наливайщик чая.');
  cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type('Что б чай наливал');
  cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('Умение пользоваться чайником, и выкидывать заварку.  АААА ещё чтоб забавлял холодной водичкой.');
    
    cy.wait(1000); 
    cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click();
    cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__title-wrapper > .card-info > .breadcrumb > li > .card-info__company').should('be.visible');
})
    });

    


