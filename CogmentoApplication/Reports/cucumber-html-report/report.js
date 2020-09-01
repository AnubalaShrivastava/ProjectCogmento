$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TestCase1.feature");
formatter.feature({
  "name": "Test the Edit functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Edit company address",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "submit username and password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "should be logged in to home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on setting gear in activity section",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "dropdown for activity option should come",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "select companies",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on first company link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Company detal information should come",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on edit",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "it should allow editing company information",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "edit company address",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on save",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "company information should be saved successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Features/TestCases.feature");
formatter.feature({
  "name": "Test the Cogmento Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check the login functionality of application",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.loginSteps.LoginSteps.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.loginSteps.LoginSteps.enter_Email_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.loginSteps.LoginSteps.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the page title and screen shot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.loginSteps.LoginSteps.get_the_page_title_and_screen_shot()"
});
formatter.result({
  "status": "passed"
});
});