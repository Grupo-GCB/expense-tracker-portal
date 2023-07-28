/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('/api/auth/login')
  })

  it('should be able to render with correct informations', () => {
    cy.get('img').should('be.visible')
    cy.get('h1').should('be.visible').contains('Welcome')
  })
})
