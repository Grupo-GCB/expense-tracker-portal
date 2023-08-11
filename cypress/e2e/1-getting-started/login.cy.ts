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
    cy.get('[data-provider="google"]').should('be.visible')
    cy.contains('button', 'Continue with Microsoft Account').should(
      'be.visible',
    )
    cy.contains('button', 'Continue with Facebook').should('be.visible')
  })

  // teste com erro
  /* it('should be able log in through google account', () => {
    cy.contains('button', 'Continue with Google').click()
    cy.origin('https://accounts.google.com/', () => {
      cy.url()
        .should('contain', 'accounts.google.com')
        .get('input[type="email"]')
        .type(Cypress.env('USERNAME'))
        .type('{enter}')
      cy.url()
        .should('contain', 'accounts.google.com')
        .get('@InputPass')
        .type(Cypress.env('PASSWORD'))
    })
  }) */

  it('should be able log in through Microsoft account', () => {
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
  })

  it('should be able log in through Facebook account', () => {
    cy.contains('button', 'Continue with Facebook').click()
    cy.origin('https://www.facebook.com/', () => {
      cy.get('#email').type(Cypress.env('USERNAME'), { log: false })
      cy.get('#pass').type(Cypress.env('PASSWORD'), { log: false })
      cy.get('#loginbutton').click()
    })
  })
})
