Feature: Broken Images Validation

  Background:
    Given I am on the Broken Images page

  Scenario: Count Broken Images
    When I check for broken images
    Then the number of broken images should be counted correctly

  Scenario: Log Broken Image Details
    When I check for broken images
    Then the details of each broken image should be logged

  Scenario: Display Total Image Count
    When I check for broken images
    Then the total number of image links should be displayed correctly

