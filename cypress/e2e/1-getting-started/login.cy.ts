/// <reference types="jest" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('/api/auth/login')
  })

  it('should be able to render with correct informations', () => {
    cy.get('img').should('be.visible')
    cy.get('h1').should('be.visible').contains('Welcome')
    cy.get('p')
      .should('be.visible')
      .contains(
        'Welcome back! Please enter your credentials to access your account and continue to organize your finances.',
      )
    cy.get('label[for=username]').should('be.visible').contains('Email address')
    cy.get('label[for=password]').should('be.visible').contains('Password')
    cy.get('input[name=username]').should('be.visible')
    cy.get('input[name=password]').should('be.visible')
    cy.get('button[data-action=toggle]').should('be.visible')
    cy.get('a').should('be.visible').contains('Forgot password?')
    cy.get('button[name=action]').should('be.visible').contains('Continue')
    cy.get('p').should('be.visible').contains("Don't have an account?")
    cy.get('a').should('be.visible').contains('Sign up')
  })

  it('should be able to login with correct informations', () => {
    cy.get('input[name=username]').type('teste@gmail.com')
    cy.get('input[name=password]').type('Terra*12')
    cy.get('button[data-action-button-primary="true"]').click()
  })

  it('should not be able to login with incorret informatios', () => {
    cy.get('input[name=username]').type('teste@teste.com')
    cy.get('input[name=password]').type('Terra*12')
    cy.get('button[data-action-button-primary="true"]').click()
    cy.get('span[data-error-code="wrong-email-credentials"]')
      .should('be.visible')
      .contains('Wrong email or password')
  })

  it('should be able to got to the regiser page', () => {
    cy.get('a').should('be.visible').contains('Sign up').click()
  })
})
