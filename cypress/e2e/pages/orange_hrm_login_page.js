export class OrangeHrmLoginPage {

    username_textbox = '[name="username"]'
    password_textbox = '[name="password"]'
    login_button = '.oxd-button'


    enterUsername(username) {
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }

}