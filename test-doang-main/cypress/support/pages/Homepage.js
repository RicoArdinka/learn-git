const locator = require('../locator/HomepageLocator');


class Homepage{
    async visit(path){
        cy.visit(path)
        return cy.url().should('eq', 'https://www.fairprice.com.sg/')
    }
    
    async visit_promotion(){
        return cy.get(locator.datatestid.tab_promo).click()
    }

    async label_pwp(label){
        return cy.get(locator.datatestid.ls_promo).should('be.visible').contains(label).click()
    }

    async label_weekly(label2){
        return cy.get(locator.datatestid.ls_promo).should('be.visible').contains(label2).click()
    }

    async label_club(label3){
        return cy.get(locator.datatestid.ls_promo).should('be.visible').contains(label3).click()
    }

    async choose_label(){
        return cy.get(locator.datatestid.opt_pwp).click()
    }

    async valid_label(label){
        return cy.get(locator.datatestid.ls_pwp).contains(label).should('be.visible')
    }
}

module.exports = Homepage;