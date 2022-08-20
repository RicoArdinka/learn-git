const Homepage = require ('../support/pages/Homepage');
let homepage = new Homepage();
const HomepageData = require ('../support/datatest/HomepageData');

describe('Page Object Model', () => {
    it('Visit Quote Web', () => {
        homepage.visit(''); 
    })
    it('Input Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote); 
    })
    it('Select Color', () => {
        homepage.choose_color(HomepageData.datatest.quote_color);
    })
    it('Submit Quote', () => {
        homepage.submit_quote(HomepageData.datatest.quote_color,HomepageData.datatest.quote);
    })
    it('Clear Quote', () => {
        homepage.clear_quote(HomepageData.datatest.quote);
    })
})