package com.loginPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.Library;



public class LoginPage extends Library{


		//Getting elements
		@FindBy(name="email")
		WebElement txtEmail;
		@FindBy(name="password")
		WebElement txtPassword;
		@FindBy(xpath="//*[@id=\'ui\']/div/div/form/div/div[3]")
		WebElement btnLogin;
		
		//Constructor
		public LoginPage(WebDriver driver) {
			this.driver=driver;
			PageFactory.initElements(driver, this);
		
	}
		public void login(String email,String pass) {
			txtEmail.sendKeys(email);
			txtPassword.sendKeys(pass);
			
			
			
		}
		public void submit() {
			btnLogin.click();
			
		}
		
}
