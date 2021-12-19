@smoke @regression
Feature: Depop - Login Feature - Test Login Functionality - Using Facebook
   As a registered user via facebook for Depop Website
   I want to test login functionality

Background: Clear cache and cookies to run multiple positive scenarios
    Given I clear cache and cookies

Scenario Outline: Login on to Facebook and capture cookies for future executions.
      
    Given  I am on the Facebook page
    And    I accept Facebook cookies consent
    When   I login on Facebook with <email> and <password>
    Then   I should login successfully with <typeOfCredentials> credentials
    And    I capture Facebook Cookies and store them
 Examples:
    | email                | password               | typeOfCredentials | 
    | useconfig            | useconfig              | facebook          | 

Scenario Outline: Login to Facebook using cookies and test Depop login journey using Facebook

    Given I login on Facebook directly using cookies
    And   I am on the login page
    And   I accept cookies consent
    When  I choose Facebook option for login
    Then  I should login successfully with <typeOfCredentials> credentials
   Examples:
    | typeOfCredentials |   
    | depopViaFacebook  | 

Scenario Outline: As a Facebook user, I should be able to login successfully on the depop.com website with facebook linked account

    Given I am on the login page
    And   I accept cookies consent
    When  I choose Facebook option for login
    And   I accept Facebook cookies consent
    And   I login on Facebook with <email> and <password>
    Then  I should login successfully with <typeOfCredentials> credentials
    Examples:
    | email                | password               | typeOfCredentials | 
    | useconfig            | useconfig              | facebook          | 