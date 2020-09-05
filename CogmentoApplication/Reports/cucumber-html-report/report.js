$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Home.feature");
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
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.submit_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be logged in to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.should_be_logged_in_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on setting gear in activity section",
  "keyword": "When "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.click_on_setting_gear_in_activity_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dropdown for activity option should come",
  "keyword": "Then "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.dropdown_for_activity_option_should_come()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select companies",
  "keyword": "When "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.select_companies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on first company link",
  "keyword": "And "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.click_on_first_company_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Company detal information should come",
  "keyword": "Then "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.company_detal_information_should_come()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on edit",
  "keyword": "When "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.click_on_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should allow editing company information",
  "keyword": "Then "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.it_should_allow_editing_company_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "edit company address",
  "keyword": "And "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.edit_company_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save",
  "keyword": "And "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "company information should be saved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.homeSteps.HomeStep_EditCompanyInfo.company_information_should_be_saved_successfully()"
});
formatter.result({
  "status": "passed"
});
});