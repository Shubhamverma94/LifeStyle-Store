Feature: File Uploader

  Scenario: Upload a file and submit
    Given I am on the file upload page
    When I upload the file "H2S.jpg"
    And I submit the file
    Then the file should be uploaded successfully
