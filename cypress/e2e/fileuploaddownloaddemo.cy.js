/// <reference types="cypress" />
/// <reference types="cypress-downLoadfile" />

it('File upload test', function() {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('photo.jpg')
})

it('File download test', function() {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})
