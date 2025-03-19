describe('HomePage Tests', () => {
  it('HomePage Loads', () => {
    cy.visit('https://theymightbetim.github.io', { failOnStatusCode: true })
  })
  it('should have the navbar', () => {
    cy.visit('https://theymightbetim.github.io')
    cy.get('.navbar').should('exist')
  })
  it('Should have the correct title', () => {
    cy.visit('https://theymightbetim.github.io')
    cy.title().should('include', 'Tim Mackenzie')
  })
  it('should have the correct header', () => {
    cy.visit('https://theymightbetim.github.io')
    cy.get('h1').should('contain', 'Tim Mackenzie - Quality Assurance Professional')
  })
  it('should have the correct intro text', () => {
    cy.visit('https://theymightbetim.github.io')
    cy.get('p').should('contain', "Welcome to my website! It's under construction, but check back soon!")
  })
  it('should have a LinkedIn link', () => {
    cy.fixture('../fixtures/social-links').then((socialLinks) => {
      cy.visit('https://theymightbetim.github.io')
      cy.get('a').contains('LinkedIn').should('have.attr', 'href', socialLinks.linkedInLink)
    })
  })
  it('should have a GitHub link', () => {
    cy.fixture('../fixtures/social-links').then((socialLinks) => {
      cy.visit('https://theymightbetim.github.io')
      cy.get('a').contains('GitHub').should('have.attr', 'href', socialLinks.githubLink)
    })
  })
})