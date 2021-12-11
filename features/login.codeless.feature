Feature: Depop - Demonstrate Codeless Automation

#Background: Re-setting up the Login page for run multiple positive scenarios
   #Given I clear cache and cookies

Scenario Outline: As a valid user, I should be able to login successfully on the depop.com website

    Given I am on the login page
    And   I accept cookies consent
    When  I enter following details in form:
      | field                      | value           |
      | Username or email address* | <username>      |
      | Password*                  | <password>      |
    When  I click login
    Then  I should <permitDecision> successfully with <typeOfCredentials> credentials

    Examples:
    |typeOfCredentials     | username           | password             | permitDecision  |
    |valid                 | oomkar             | Depop!"£123          | login           |


