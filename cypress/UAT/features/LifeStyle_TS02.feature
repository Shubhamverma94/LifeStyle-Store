Feature: Verfying and Validating Various Modules
Background: Lifestyle Store
Given I am on the homepage
Scenario: Verify Logo presence
    Then Logo is verified

Scenario: Verify Women dropdown on hover
    When I hover over the Women link in the navbar
    Then the Women dropdown should be visible

Scenario: Verify Men dropdown on hover
    When I hover over the Men link in the navbar
    Then the Men dropdown should be visible

Scenario: Verify Kids dropdown on hover
    When I hover over the Kids link in the navbar
    Then the Kids dropdown should be visible

Scenario: Verify Shoes&Bags dropdown on hover
    When I hover over the Shoes&Bags link in the navbar
    Then the Shoes&Bags dropdown should be visible

Scenario: Verify Beauty dropdown on hover
    When I hover over the Beauty link in the navbar
    Then the Beauty dropdown should be visible

Scenario: Verify Searchbar input present
    Then the Searchbar input should be visible

Scenario: Verify More dropdown on hover
    When I hover over the More link in the navbar
    Then the More dropdown should be visible

Scenario: Validate Redirect to Men page on clicking Men in navbar
    When I Click Men link in the navbar
    Then validate the Men's page URL

Scenario: Verify Free Shipping is present in Top-Nav
    Then the Free Shipping should be visible

Scenario: Verify Click & Collect is present in Top-Nav
    Then the Click & Collect should be visible

Scenario: Verify Return to Store is present in Top-Nav
    Then the Return to Store should be visible