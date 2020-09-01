package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.Library;

public class HomePage extends Library{
	
	/*
	 * @FindBy(xpath=
	 * "//*[@id=\'ui\']/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[1]/a[2]/i")
	 * WebElement settingGear;
	 * 
	 * @FindBy(xpath=
	 * "//*[@id=\'ui\']/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/form/div/div/i")
	 * WebElement activityDrpDn;
	 */
	
	public HomePage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	
}
	public void verifyPage(String expected,String actual) {
		
		
	}
	
	
}
