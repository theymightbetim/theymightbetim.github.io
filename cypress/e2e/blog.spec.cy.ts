describe('BlogPage Tests', () => {
    it('BlogPage Loads', () => {
        cy.visit('https://theymightbetim.github.io/blog', { failOnStatusCode: true })
    })
    it('should have the navbar', () => {
        cy.visit('https://theymightbetim.github.io/blog')
        cy.get('.navbar').should('exist')
    })
    it('should have the correct header', () => {
        cy.visit('https://theymightbetim.github.io/blog')
        cy.get('h1').should('contain', 'Defective Cognition')
    })
    it('should have the correct title', () => {
        cy.visit('https://theymightbetim.github.io/blog')
        cy.title().should('contain', 'Defective Cognition')
    })

    it('Visual Test', () => {
        cy.visit('https://theymightbetim.github.io/blog')
        cy.wait(1000)
        cy.get('body').snapshot()
    })
})