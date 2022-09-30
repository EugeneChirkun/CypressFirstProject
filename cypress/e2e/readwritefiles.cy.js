
before(function(){
    cy.fixture('example.json').as('test_data')
})


it('Read files using fixture', function(){
    cy.fixture('example').then((data) => {
        cy.log (data.name)
        cy.log (data.email)
    })
    cy.log(this.test_data.name)
})