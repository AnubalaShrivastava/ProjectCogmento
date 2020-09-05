package com.seleniumReusableFunctions;

import java.io.File;
import java.io.IOException;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.baseClass.Library;





public class SeleniumUtilities extends Library{
	public SeleniumUtilities(WebDriver driver) {
		this.driver=driver;
		logger = Logger.getLogger(Library.class);
		
	}
	public void to_take_screenshot(String path) {
		TakesScreenshot ts=(TakesScreenshot)driver;
		File source=ts.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(source,new File(path));
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
	public void getTitle() {
		
		System.out.println(driver.getTitle());
	
	}
	public void Explicitlywait(String Locator) {
		WebDriverWait wait=new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath(Locator))));
		
	}
	public void dropdown(WebElement element,String selectedvalue) {
		Select select = new Select(element); 
		select.selectByVisibleText(selectedvalue);
		
	}
	public void pageVerification(String expectedURLorTitle,String actualURLorTitle) {
		
		try {
		Assert.assertEquals(expectedURLorTitle, actualURLorTitle);
		logger.info("Page is verified");
		
		}catch(Exception e)
		{
			logger.info("Page is not verified");
		}
	}
	//Alert Handling
		public void alertHandle() {
		
			Set<String> winhandles = driver.getWindowHandles();// all the windows
		   
			for (String winhandle : winhandles) {
				driver.switchTo().window(winhandle);
				
				try {
					Thread.sleep(5000);
				} catch (Exception e) {
					
				}
				driver.findElement(By.xpath("/html/body/div[3]/div/div[3]/button[@class='ui red button']")).click();
			}
		   
		   
		}
	public void quit() {
		driver.close();
		
	}

}
