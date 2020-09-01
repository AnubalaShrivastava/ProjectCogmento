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
formatter.match({
  "location": "com.stepDefinition.HomeSteps.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.submit_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be logged in to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.should_be_logged_in_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on setting gear in activity section",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.click_on_setting_gear_in_activity_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dropdown for activity option should come",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.dropdown_for_activity_option_should_come()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select companies",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.select_companies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on first company link",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.click_on_first_company_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company detal information should come",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.company_detal_information_should_come()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on edit",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.click_on_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should allow editing company information",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.it_should_allow_editing_company_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "edit company address",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.edit_company_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "company information should be saved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.HomeSteps.company_information_should_be_saved_successfully()"
});
formatter.result({
  "status": "passed"
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
  "location": "com.stepDefinition.LoginSteps.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.enter_Email_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the page title and screen shot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.get_the_page_title_and_screen_shot()"
});
formatter.result({
  "status": "passed"
});
});