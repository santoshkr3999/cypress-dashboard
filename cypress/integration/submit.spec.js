describe('submit form', () => {
    it('should fill and submmit developer name', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#developer-name').type('walter')
        cy.get('#tried-test-cafe').click()
        cy.get('#submit-button').click()
        cy.get('#article-header').contains('Thank you')
    })
})