Feature: Promotions Tab Fairprice

    I want to validation label Promotions and validation label PWP
    @Promotions @PWP @TC_PROMOTION
    Scenario: I want to validation label in tab Promotions and validate product labeled PWP
        Given I visit Web Fairprice
        When I click Tab Promotions on navbar
        And I click label PWP for validation
        And I click label Weekly Deals for validation
        And I click label Digital Club Exclusive for validation
        And I click label PWP
        Then I choose label PWP
        Then I verify all product on PWP labeled pwp correctly