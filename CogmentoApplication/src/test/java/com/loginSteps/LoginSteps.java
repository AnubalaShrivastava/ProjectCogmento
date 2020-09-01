package com.loginSteps;

import com.baseClass.Library;
import com.loginPages.LoginPage;
import com.seleniumReusableFunctions.SeleniumUtilities;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends Library{
	LoginPage lpage;
	 SeleniumUtilities sUti;
	@Given("Launch the browser and navigate to the URL")
	public void launch_the_browser_and_navigate_to_the_URL() {
		browserSetUp();
		logger.info("Browser Launched and navigate to URL");
	   
	}

	@When("Enter Email and password")
	public void enter_Email_and_password() {
        lpage=new LoginPage(driver);
		 lpage.login(properties.getProperty("loginEmail"), properties.getProperty("LoginPassword"));
		 logger.info("LoginEmail and password entered successfully");
	
	}

	@Then("Click the login button")
	public void click_the_login_button() {
		lpage.submit();
		logger.info("Login successfully");
	
	}

	@Then("Get the page title and screen shot")
	public void get_the_page_title_and_screen_shot() {
		sUti = new SeleniumUtilities(driver);
		sUti.to_take_screenshot("src/test/resources/ScreenShots/CogmentoLogin.png");
		logger.info("Take Screen Shot");
		sUti.getTitle();
		tearDown();
	   
	}

}
