@smoke @regression
Feature: Depop - Login Feature - Test Login Functionality - Positive Tests
   As a registered user for Depop Website
   I want to test login functionality

Background: Re-setting up the Login page for run multiple positive scenarios
    Given I clear cache and cookies

Scenario Outline: As a valid user, I should be able to login successfully on the depop.com website

    Given I am on the login page
    And   I accept cookies consent
    When  I login with <username> and <password>
    Then  I should <permitDecision> successfully with <typeOfCredentials> credentials

    Examples:
    |typeOfCredentials     | username           | password           | permitDecision  |
    |valid                 | useconfig          | useconfig          | login           |
    |valid                 | useconfigemail     | useconfig          | login           |

