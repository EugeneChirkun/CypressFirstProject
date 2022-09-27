/// <reference types="cypress" />

it('Google Search', () => {
cy.visit('https://google.com/')
cy.get('.jw8mI').scrollTo('bottom')
cy.get('#L2AGLb > .QS5gu').click()
cy.get('.gLFyf').type("The Doors Riders on the storm video{enter}")
cy.contains('Wideo').click()
})