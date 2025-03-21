describe('Footer Tests', () => {
    beforeEach(() => {
        cy.visit('https://theymightbetim.github.io/')
    })
    it('should display the footer', () => {
        cy.get('.footer')
            .should('be.exist')
            .should('be.visible')
            .should('contain.text', 'Built with')
    })
    it('should contain react icon', () => {
        cy.get('.fa-react').should('exist')
    })
})