Feature: Koligrum HomePage

    I want to be able to submit a quote

    @Home @BlueColor @TC_HOME_001
    Scenario: I want to be able to submit a Blue quote
        Given I open Localhost:6061
        When I type a quote: Ayumu tenanan ora editan
        And I choose the Blue colour
        Then I verify quote submitted "Blue" and "Ayumu tenanan ora editan"
        Then I verify quote has been deleted: Ayumu

    @Home @BlueColor @TC_HOME_002
    Scenario Outline: I want to be able to submit a Blue quote
        Given I open Localhost:6061
        When I type a quote: Ayumu tenanan ora editan
        And I choose the <colour> colour
        Then I verify quote submitted "<colour>" and "Ayumu tenanan ora editan"
        Then I verify quote has been deleted: Ayumu
    Example:
            | colour |
            | White  |
            | Yellow |
            | Cyan   |
            | Blue   |