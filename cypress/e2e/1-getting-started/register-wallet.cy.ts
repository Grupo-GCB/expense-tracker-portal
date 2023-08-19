/// <reference types="jest" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('/api/auth/login')
  })

// TODO: Arrumar o teste de registro de carteira
describe('wallet Registration', () => {
  it('should be able to register a new wallet', () => {
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
  });
})
})