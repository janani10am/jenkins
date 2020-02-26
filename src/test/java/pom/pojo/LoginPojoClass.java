package pom.pojo;

import org.helperclass.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPojoClass extends BaseClass {
	
	static LoginPojoClass l=null;
	private LoginPojoClass() {
		PageFactory.initElements(driver,this);
	}
	
	public static LoginPojoClass object() {
		
		if(l==null) {
			l=new LoginPojoClass();
			return l;
		}
		return l;
	}
	
	
	
	
	@FindBy(xpath="(//*[text()='Login'])[2]")
	private WebElement loginClick;

	@FindBy(xpath="(//label//child::input)[1]")
	private WebElement user;
	
	@FindBy(xpath="//*[starts-with(@type,'pass')]")
	private WebElement pass;
	
	@FindBy(xpath="//*[@name='user_token']//following-sibling::input")
	private WebElement btnLogin;
	
	public WebElement getLoginClick() {
		return loginClick;
	}

	public WebElement getUser() {
		return user;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getBtnLogin() {
		return btnLogin;
	}
	
	
	
	
	
	

}
