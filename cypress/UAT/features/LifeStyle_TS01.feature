Feature: Logging into the application
  Background: Lifestyle Store

  Scenario: Validating Mini Dialog Box
  Given I am on the homepage
    When I click on the login button
    Then Validate Dialog box

  Scenario: Verifying Change button 
  Given I am on the homepage
    When I click on the login button
    When I enter dummy credentials
    And click on the login button
    Then Verify Change button

  Scenario: Verifying Resend code after 30 sec 
  Given I am on the homepage
    When I click on the login button
    When I enter dummy credentials
    And click on the login button
    Then Verify Resend button

  Scenario: Validate Userprofile after Sign In
  Given I am on the homepage
    When I click on the login button
    When I enter valid credentials
    And click on the login button
    Then I should be logged in successfully