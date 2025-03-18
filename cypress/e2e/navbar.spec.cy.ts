describe('NavBar Tests', () => {
    before('Load the Home Page', () => {
        cy.visit('https://theymightbetim.github.io', { failOnStatusCode: true })
    })
    it('should have a Home link', () => {
        cy.get('[data-testid="home-link"]')
            .should('exist')
            .should('contain', 'Home')
            .should('have.attr', 'href', '/')
    })
    it('should have an About link', () => {
        cy.get('[data-testid="about-link"]')
            .should('exist')
            .should('contain', 'About')
            .should('have.attr', 'href', '/about')
    })
    it('should have a Projects link', () => {
        cy.get('[data-testid="projects-link"]')
            .should('exist')
            .should('contain', 'Projects')
            .should('have.attr', 'href', 'https://github.com/theymightbetim')
    })
    it('should have a Blog link', () => {
        cy.get('[data-testid="blog-link"]')
            .should('exist')
            .should('contain', 'Blog')
            .should('have.attr', 'href', '/blog')
    })
    it('should have a Contact link', () => {
        cy.get('[data-testid="contact-link"]')
            .should('exist')
            .should('contain', 'Contact')
            .should('have.attr', 'href', '/contact')
    })
})
