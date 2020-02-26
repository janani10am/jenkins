package org.helperclass;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	public static WebDriver driver;
	

	public static void launchBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\JANANI\\eclipse-workspace\\TestngProject\\driver\\chromedriver1.exe");
		driver = new ChromeDriver();

	}

	public static void getUrl() {
		driver.get("https://mfdesign.my");
	}

	public static void maxWindow() {
		driver.manage().window().maximize();
	}

	public static void fill(WebElement e, String s) {
		e.sendKeys(s);
	}

	public static void click(WebElement e) {
		e.click();
	}
	
	
	
	
	
	
	

}
