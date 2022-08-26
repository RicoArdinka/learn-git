//Test Promotion
describe('Promotions test', () => {
    it('Visit Web', () => {
        cy.visit('');
        cy.url().should('eq', 'https://www.fairprice.com.sg/')
        cy.url().then((url) => {
            expect(url).to.be.equal('https://www.fairprice.com.sg/')
        })
    })
        
    it('Visit Tab Promotion', () => {
        cy.get('[data-testid="Promotions"]').click()
    })

    it('Validation label PWP', () => {
        cy.get('[data-testid="carousel"]')
            .should('be.visible')
            .cy.contains('PWP').click()
    })

    it('Validation label Weekly Deals', () => {
        cy.get('[data-testid="carousel"]')
            .should('be.visible')
            .cy.contains('Weekly Deals').click()
    })

    it('Validation label Digital Club Exclusive', () => {
        cy.get('[data-testid="carousel"]')
            .should('be.visible')
            .cy.contains('Digital Club Exclusive').click()
    })

    it('Choose Promotion with label PWP', () => {
        cy.get('[data-testid="tagOption-pwp"]')
            .click()
    })

    it('Validation all product PWP labeled pwp correctly', () => {
        cy.get('[data-testid="product"] > div:nth-child(1) > span:nth-child(1)')
            .should('be.visible').cy.contains('PWP')
        })
})