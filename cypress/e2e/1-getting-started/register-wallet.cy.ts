/// <reference types="jest" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('/api/auth/login')
  })
describe('Cadastro de Carteira', () => {
  it('deve cadastrar uma nova carteira com sucesso', () => {
    cy.contains('button', 'Continue with Microsoft Account').click()
    cy.origin('https://login.live.com/', () => {
      cy.get('input[type="email"]').type(Cypress.env('USERNAME'), {
        log: false,
      })
      cy.get('input[type="submit"]').click()
      cy.get('input[type="password"]').type(Cypress.env('PASSWORD'), {
        log: false,
      })
      cy.get('input[type="submit"]').click()
      cy.get('#idBtn_Back').click()
    })
    cy.visit('http://localhost:3000/callback');
    /*
    cy.visit('/Wallet'); // Ajuste o URL conforme necessário

    // Abre o modal
    cy.contains('cadastrar nova carteira').click();

    // Preenche o formulário
    cy.get('[name="account_type"]').select('Conta Corrente');
    cy.get('[name="bank_id"]').select('Bank A');
    cy.get('[name="description"]').type('Minha nova carteira');
    
    // Clica no botão de confirmar
    cy.contains('Confirmar!').click();

    // Verifica se o modal foi fechado
    cy.get('[role="dialog"]').should('not.exist');

    // Verifica se a carteira foi cadastrada com sucesso
    cy.contains('Registro da carteira feito com sucesso');
    */
  });
})
})