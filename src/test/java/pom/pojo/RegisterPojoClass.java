package pom.pojo;

import org.helperclass.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPojoClass extends BaseClass {
	
	public RegisterPojoClass() {
		
		PageFactory.initElements(driver,this);
	}
	
	@FindBy(xpath="(//a[(text()='Register')])[2]")
	private WebElement regClick;
	
	@FindBy(xpath="(//label//child::input)[1]")
	private WebElement userEmail;
	
	@FindBy(xpath="//*[@type='text' and @name='user_name']")
	private WebElement userName;
	
	@FindBy(xpath="//*[@name='user_password']")
	private WebElement userPass;
	
	@FindBy(xpath="//*[@name='user_password_2']")
	private WebElement reEnterPass;
	
	@FindBy(xpath="(//span//preceding-sibling::input)[3]")
	private WebElement submit;
	
	
	
	

	
	
	

}
