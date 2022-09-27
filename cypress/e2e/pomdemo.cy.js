/// <reference types="cypress" />
import {OrangeHrmLoginPage} from "./pages/orange_hrm_login_page"

const loginPage = new OrangeHrmLoginPage()

it('POM Demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    
    
    })