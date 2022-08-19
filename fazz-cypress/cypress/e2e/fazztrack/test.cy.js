import ExamplePage from "../page/ExamplePage";

//test suit
describe('Your first test', () => {
    it('Verify element page', function() {
        cy.visit('/')
        
        //verify label "Koligrum Web Playground"
        cy.get('h1').should($text => {
            expect($text).to.contain('Koligrum Web Playground')
        })

        //verify progress
        cy.get('[role=progressbar]')
            .should('be.visible')
            .and($text => {
                expect($text).to.contain('1 / 10')
            })
        
        // verify quote textbox
        cy.get('#inputQuote')
            .should('be.visible')
    });
})


describe('Cypress Basic 2', () => {
    it('verify list of options', function() {
        //visit web
        cy.visit('/')

        const optionList = ['White', 'Yellow', 'Cyan', 'Magenta', 'Blue'];
        //get list of options
        cy.get('select.form-control > option')
            .should($list => {
                //total list is 5
                expect($list).to.have.length(5)

                //verify all value
                for(let i = 0; i < $list.length; i++){
                    expect($list.eq(i)).to.contain(optionList[i]) 
                }
            })
    });

    it('check input', function() {
        //visit web
        const examplePage = new ExamplePage()
        cy.visit('/')

        // input at least 3 quotes
        let i = 0
        let n = 3
        let arrayInput = []
        while(i < n){
            //input quote
            let temp = 'quote ' + (i+1)
            arrayInput.push(temp)
            cy.get('#inputQuote').type(temp);
            
            //pilih warna --> pilih warna yg berbeda
                examplePage.selectColor(i)

            //click button
                examplePage.clickButton()
            i++;
        }
        //verify Grid View
        //verify jumlah quote benar
        // cy.get('').should('have.length', n)

        //verify quotes yang dimasukkan benar
        cy.get('p[name="quoteText"]').then($listQuotes => {
            for(let j = 0; j < arrayInput.length; j++){
                expect($listQuotes.eq(j+1)).to.contain(arrayInput[j])
            }
        })

        //verify tablenya ada
        cy.get('#tableView')
            .click()

        //hover button ada
        cy.get('#buttonShowTable').trigger('mouseover') //tergantung even yg ada pada hovernya js

        //verify isi table
        cy.get('.table > thead').should('have.text', 'Quotes Color')
        
        
        cy.get('.table > tbody > [name="tableRow"]')
            .should('not.be.empty')
            .and($text => {
                expect($text).to.have.length(4)
            })     
    });
})