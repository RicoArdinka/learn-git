describe('User Input Quote', () => {
    it('URL visit', () => {
        cy.visit('');
        cy.url().should('eq','http://localhost:6061/')
        cy.url().then((url) => {
            expect(url).to.be.equal('http://localhost:6061/')
        })

    })

    it('Type Quote', () => {
        cy.get('[data-testid="textInputQuote"]')
        .type('Ayumu tenanan ora editan');
    })

    it('Select Color', () => {
        cy.get('[data-testid="colourSelect"]')
        .select('Cyan')
    })

    it('Click Button', () => {
        cy.get('[data-testid="buttonAddQuote"]')
        .click()
    })

    it('Remove Quote', () => {
        cy.get('.panel-body > .row > :nth-child(2)')
        .click()
    })
})