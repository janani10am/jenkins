package com.stepDefinition;

import java.util.List;
import java.util.Map;

import org.helperclass.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pom.pojo.LoginPojoClass;

public class Loginstepdefinition extends BaseClass{
	
	@Given("^user is in mfDesign login page$")
	public void user_is_in_mfDesign_login_page() throws Throwable {
		launchBrowser();
		getUrl();
		maxWindow();
	}
	
	@When("^user enter valid and invalid email and password$")
	public void user_enter_valid_and_invalid_email_and_password(DataTable d) throws Throwable {
	
		List<Map<String, String>> mp = d.asMaps(String.class,String.class);
		LoginPojoClass l = LoginPojoClass.object();
		click(l.getLoginClick());
		fill(l.getUser(),mp.get(1).get("username"));
		fill(l.getPass(),mp.get(0).get("password"));
		
	}
/*	@When("^user enter valid and invalid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_valid_and_invalid_and(String s1, String s2) throws Throwable {
		WebElement btnLogin = driver.findElement(By.xpath("(//a[text()='Login'])[2]"));
		btnLogin.click();
		WebElement txtUser = driver.findElement(By.name("user_email"));
		txtUser.sendKeys(s1);
		WebElement txtPass = driver.findElement(By.name("user_password"));
		txtPass.sendKeys(s2);
	}*/
	
	@Then("^user click login button$")
	public void user_click_login_button() throws Throwable {
		LoginPojoClass l = LoginPojoClass.object();
		click(l.getBtnLogin());
		driver.quit();
	}


}
