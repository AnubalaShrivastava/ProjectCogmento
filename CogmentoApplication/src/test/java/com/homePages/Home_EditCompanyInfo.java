package com.homePages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.Library;


public class Home_EditCompanyInfo extends Library{
	
	       //Getting elements for login
			@FindBy(name="email")
			WebElement txtEmail;
			@FindBy(name="password")
			WebElement txtPassword;
			@FindBy(xpath="//*[@id=\'ui\']/div/div/form/div/div[3]")
			WebElement btnLogin;
			
	        //Getting elements for edit company address	
			@FindBy(xpath="//div[@class='content card-header']//i[@class='right floated setting icon color-gray']")
			WebElement gearAct;
			@FindBy(xpath="//i[@class='dropdown icon']")
			WebElement drpdn;
			@FindBy(xpath="//span[text()='companies']")
			WebElement option;
			@FindBy(xpath="//a[text()='Cloud X Analytics']")
			WebElement cmpnylink;
			@FindBy(xpath="//button[@class='ui icon button']/i[@class='edit icon']")
			WebElement btnEdit;
			@FindBy(xpath="//input[@name='address']")
			WebElement txtadd;
			@FindBy(xpath="//i[@class='save icon']")
			WebElement btnSave;
			
			
			//Constructor
			public Home_EditCompanyInfo(WebDriver driver) {
				//this.driver=driver;
				PageFactory.initElements(driver, this);
				}
			//Entering Login credentials
			public void login(String email,String pass) {
				txtEmail.sendKeys(email);
				txtPassword.sendKeys(pass);
								
			}
			//Submit login
			public void submit() {
				btnLogin.click();
			}
			
			//Editing company address
			public void clickSettingGear() {
				gearAct.click();
				
			}
			
			public void clickActivityDropdown() {
				drpdn.click();
			}
			
			public void clickOption() {
				option.click();
				
			}
			public void selectCompany() {
				cmpnylink.click();
				driver.navigate().to(driver.getCurrentUrl());
			}
			
			public void clickEdit() {
				btnEdit.click();
			}
			public void editAddress(String newAdd) {
				txtadd.clear();
				txtadd.sendKeys(newAdd);
				
			}
	       public void save() {
	    	   btnSave.click();
	       }
}
