package com.stepDefinition;

import java.util.List;

import org.helperclass.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pom.pojo.SearchPojoClass;

public class SearchStepDefinition extends BaseClass {

	@Given("^user is in mfDesign search page$")
	public void user_is_in_mfDesign_search_page() throws Throwable {
		launchBrowser();
		getUrl();
		maxWindow();

	}

	@When("^user enters \"([^\"]*)\" in search tab$")
	public void user_enters_in_search_tab(String s1) throws Throwable {
		SearchPojoClass s = new SearchPojoClass();
		fill(s.getBtnsearch(), s1);
		click(s.getStab());

	}

	@Then("^user click search button$")
	public void user_click_search_button() throws Throwable {
		SearchPojoClass s = new SearchPojoClass();
		int i = s.getProduct().size();
		 List<WebElement> p = s.getProduct();
		System.out.println(i);
		
		for (int j = 0; j < s.getProduct().size(); j++) {
			 WebElement w = s.getProduct().get(j);
			 String text = w.getText();
			System.out.println(text);
		}
		WebElement txt = driver.findElement(By.xpath("//a[contains(text(),'Elijah')] "));
		System.out.println(txt.getText());
			// click(s.getProduct().get(i));
			// driver.navigate().back();
			// }
			//
			//
			// for (WebElement x : s.getProduct()) {
			// String text = x.getText();
			// System.out.println(text);
			//
			// if (text.contains("SOFA")) {
			// x.click();
			// driver.navigate().back();
			// }

		

		driver.quit();
	}

}
