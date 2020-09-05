package com.homeSteps;

import java.util.Date;

import com.baseClass.Library;
import com.homePages.Home_EditCompanyInfo;
import com.loginPages.LoginPage;
import com.seleniumReusableFunctions.SeleniumUtilities;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomeStep_EditCompanyInfo extends Library{
	//LoginPage lpage;
	Home_EditCompanyInfo hpage;
	SeleniumUtilities sUti;
	@Given("launch the browser and navigate to the URL")
	public void launch_the_browser_and_navigate_to_the_URL() {
		browserSetUp();
		logger.info("Browser Launched and navigate to URL");
	    
	}

	@When("submit username and password")
	public void submit_username_and_password() {
		hpage=new Home_EditCompanyInfo(driver);
		hpage.login(properties.getProperty("loginEmail"), properties.getProperty("LoginPassword"));
		hpage.submit();
		 logger.info("Login successfully");
		 sUti = new SeleniumUtilities(driver);
		 sUti.alertHandle();
	}

	@Then("should be logged in to home page")
	public void should_be_logged_in_to_home_page() {
		
		sUti = new SeleniumUtilities(driver);
		//sUti.pageVerification("https://ui.cogmento.com/home", driver.findElement(By.xpath("//*[@id=\'ui\']/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[1]/div").);
		//hpage = new HomePage(driver);
		
	   
	}

	@When("click on setting gear in activity section")
	public void click_on_setting_gear_in_activity_section() {
		hpage=new Home_EditCompanyInfo(driver);
		hpage.clickSettingGear();
	   
	}

	@Then("dropdown for activity option should come")
	public void dropdown_for_activity_option_should_come() {
		hpage.clickActivityDropdown();
	}

	@When("select companies")
	public void select_companies() {
		//hpage.clickOption();
	}

	@When("click on first company link")
	public void click_on_first_company_link() {
		//hpage.selectCompany();
	   
	}

	@Then("Company detal information should come")
	public void company_detal_information_should_come() {
		
	   
	}

	@When("click on edit")
	public void click_on_edit() {
		//hpage.clickEdit();
	   
	}

	@Then("it should allow editing company information")
	public void it_should_allow_editing_company_information() {
	   
	}

	@Then("edit company address")
	public void edit_company_address() {
		//hpage.editAddress("Add at: "+ (new Date()).toString());
	    
	}

	@Then("click on save")
	public void click_on_save() throws InterruptedException {
				//hpage.save();	
	   
	}

	@Then("company information should be saved successfully")
	public void company_information_should_be_saved_successfully() {
		tearDown();
	}



}
