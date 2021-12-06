@regression
Feature: Depop - Login Feature - Test Login Functionality - Negative Tests
   As a registered user for Depop Website
   I want to test login functionality

Background: Re-setting up the Login page for run various negative scenarios
    Given I clear cache and cookies

Scenario Outline: As an invalid user (invalid credentials), I should not be able to login successfully on the depop.com website

    Given I am on the login page
    And   I accept cookies consent
    When  I login with <username> and <password>
    Then  I should <permitDecision> successfully with <typeOfCredentials> credentials

    Examples:
    |typeOfCredentials     | username                   | password             | permitDecision    |
    |invalid               | oomkar@yahoo.com           | InvalidPassword$1    | not_login         |
    |invalid               | oomkar                     | InvalidPassword$2    | not_login         |
    |invalid               | invalid_email@yahoo.com    | Depop!"£123          | not_login         |
    |invalid               | invalid_user               | Depop!"£123          | not_login         |
    