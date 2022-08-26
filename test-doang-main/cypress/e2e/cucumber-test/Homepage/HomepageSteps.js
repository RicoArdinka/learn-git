import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const Homepage = require ('../../../support/pages/Homepage')
let homepage = new Homepage();

Given(/^I visit Web Fairprice$/, () => {
    homepage.visit('/');
})

When(/^I click Tab Promotions on navbar$/, () => {
    homepage.visit_promotion();
})

And(/^I click label (\w+) for validation$/, (label) => {
    homepage.label_pwp(label);
})

And(/^I click label (\w+ \w+) for validation$/, (label2) => {
    homepage.label_weekly(label2);
})

And(/^I click label (\w+ \w+ \w+) for validation$/, (label3) => {
    homepage.label_club(label3);
})

And(/^I click label PWP$/, () => {
    homepage.choose_label()
})

Then(/^I choose label PWP$/, () => {
    homepage.choose_label();
})

Then(/^I verify all product on (.+) labeled pwp correctly$/, (label) => {
    homepage.valid_label(label);
})