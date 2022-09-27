/// <reference types="cypress" />
import { OrangeHrmLoginPage } from "./pages/orange_hrm_login_page"

const loginPage = new OrangeHrmLoginPage()

describe('All login tests', () => {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login Test with all credentials correct', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        cy.contains('My Info').click()
    })

    it('Login Test with wrong UserName', () => {
        loginPage.enterUsername('Admin13')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        cy.contains('My Info').click()
    })

})

it('Login Test with wrong Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin1234')
    loginPage.clickLogin()

    cy.contains('My Info').click()
})