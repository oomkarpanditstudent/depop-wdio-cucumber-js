# Depop Automation Tech Task

WebdriverIO-Cucumber-Javascript Framework developed for a tech task for testing login functionality on depop website.

# Features

- Support for Test Execution on Local Browser, On Dockerized Selenium Grid using docker-compose and On Cloud (Browserstack).
- Cucumber HTML Report 
- Screenshot Capture on failures and also after successful execution for evidencial purposes.
- Parallel Execution to reduce test execution time.
- Page Object Design Pattern
- Selenium Grid with Chrome and Firefox.

# How to execute tests

  **Pre-requisite:** - Node.js and Npm (for development v14.5.0 was used)
  
  Clone or Download the repo from : https://github.com/oomkarpanditstudent/depop-wdio-cucumber-js
  
**Install dependencies:**

**npm i --force**
  
  Go to the root folder of the project where package.json is present and execute **npm i --force** or **npm install --force** command on command prompt or bash terminal to install all the dependencies.
  There were some depencies issue with Cucumber HTML Report hence --force flag.
  
  **Run Tests:**
  
**npm run local.chrome**
  
  For Local Browser - Chrome
    By default Chrome v96 is supported, in case you have different version please update this setting in package.json to required version of chromedriver "chromedriver": "^96.0.0" and do npm install once again)
  
  **Targer Specific Tests:** Above command will execute all the feature files present in the folder, to target specific feature file, use 
  
  **npm run local.chrome -- --spec login.positive.feature**

  Other ways to execute tests i.e. on Docker Selenium Grid of Cloud is listed below

# View Automation Report and Results

- Cucumber's html report is produced in reports folder at the root directory of the project
- Go to file reports/html/index.html
- Right click on index.html and open in browser to view report
- Index Page shows the high level details, to view the step level execution and screenshots, click on each feature name

# Feature files

- Feature file contains the scenarios in Gherkin format where examples drive the test data for various login functionality.
- Created two feature files to demostrate parallel execution.
         1. Positive Tests - using valid credentials
		 2. Negative Tests - using invalid credentials

# Other ways to execute tests

# Docker Grid
**Docker Selenium Grid on Local Machine:**

After installing dependencies i.e. npm i --force

**docker-compose up**

This will execute all the feature files on docker selenium grid

After execution, to clean up all containers:

**docker-compose down** (in another terminal/command prompt)

This will shut down all the containers which were spun up for execution.

Reports will be present in the local reports folder.

# Docker Grid on Jenkins

**Docker Selenium Grid on CI Tool like Jenkins**

This commands should be configured via jenkins pipeline or manually inside a jenkins job .

To kick off tests :

**docker-compose -f docker-compose.yaml -f docker-compose-jenkins.yaml up**

To shut down and clean up all containers:

**docker-compose down**

This will install dependencies and execute tests on jenkins or any other CI Tool.


# Cloud Execution
**Cloud (Browserstack)**
On Command Prompt or Bash Terminal

BROWSERSTACK_USERNAME=replaceme  BROWSERSTACK_ACCESS_KEY=replaceme  npm run browserstack 

This will execute all the feature files on cloud. (Please update the replaceme text with username and access key before running this command)
