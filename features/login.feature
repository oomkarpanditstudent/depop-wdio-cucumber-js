Feature: Depop - Login Feature - Test login functionality 
   As a Registered User on Depop Website
   I want to test login functionality

  Scenario Outline: As a valid user, I can login successfully on the depop.com

    Given I am on the login page
    And   I accept cookies consent
    When  I login with <username> and <password>
    Then  I should see a user avatar

    Examples:
      | username | password             | 
      | oomkar   | Depop!"£123          | 
     
