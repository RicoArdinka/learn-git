const Homepage = require ('../support/pages/Homepage');
let homepage = new Homepage();
const HomepageData = require ('../support/datatest/HomepageData');

describe('Promotions test', () => {
    it('Visit Web', () => {
        homepage.visit('/');
    })
        
    it('Visit Tab Promotion', () => {
        homepage.visit_promotion()
    })

    it('Validation label PWP', () => {
        homepage.label_pwp(HomepageData.datatest.label)
    })

    it('Validation label Weekly Deals', () => {
        homepage.label_weekly(HomepageData.datatest.label2)
    })

    it('Validation label Digital Club Exclusive', () => {
        homepage.label_club(HomepageData.datatest.label3)
    })

    it('Choose Promotion with label PWP', () => {
        homepage.choose_label()
    })

    it('Validation all product PWP labeled pwp correctly', () => {
        homepage.valid_label(HomepageData.datatest.label)
        })
})