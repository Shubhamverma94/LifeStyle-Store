Feature: Verifying the contents of the Mens page
Background: Lifestyle Store
Given I am on the homepage
When I Click Men link in the navbar
Scenario: Verify Carousel Presence
    Then User navigates to the image carousel section

Scenario: Validate Image changes on carousel
    And User navigates to the image carousel section
    Then User clicks the next button and verifies that the image changes

Scenario: Verify "Demin Destination" On Men Page
    And User navigates to the Denim Destination section
    Then Verify Denim Destination section

Scenario: Verify "Formal Store" On Men Page
    And User navigates to the Formal Store section
    Then Verify Formal Store section

Scenario: Verify "More Brands To Love" On Men Page
    And User navigates to the More Brands To Love section
    Then Verify More Brands To Love section

Scenario: Verify "Highlights of the Day" On Men Page
    And User navigates to the Highlights of the Day section
    Then Verify Highlights of the Day section

Scenario: Verify "Active Wardrobe" On Men Page
    And User navigates to the Active Wardrobe section
    Then Verify Active Wardrobe section

Scenario: Verify "Exclusive Collection" On Men Page
    And User navigates to the Exclusive Collection section
    Then Verify Exclusive Collection section

Scenario: Verify "Trendy Bottom Styles" On Men Page
    And User navigates to the Trendy Bottom Styles section
    Then Verify Trendy Bottom Styles section

Scenario: log "all sections" of Men Page to console
    Then All Sections of Men's Page to console