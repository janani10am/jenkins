package pom.pojo;

import java.util.List;

import org.helperclass.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPojoClass extends BaseClass {
	

	public SearchPojoClass() {
		PageFactory.initElements(driver, this);
	}
	
	

	@FindBy(className="lazy_load_img")
	private  List<WebElement> product;
	

	@FindBy(xpath="//*[text()='Home']")
	private WebElement home;

	@FindBy(xpath = "(//input//following-sibling::button)[1]")
	private WebElement stab;

	@FindBy(xpath = "//*[@name='price']//preceding-sibling::input")
	private WebElement btnsearch;
	
	@FindBy(xpath="(//*[starts-with(@alt,'Sofa')])[1]")
	private WebElement sofaMte;
	
	@FindBy(xpath="//*[text()='sofa']")
	private WebElement sofaClick;
	
	@FindBy(xpath="(//*[text()='coffee table']//preceding-sibling::a)[2]")
	private WebElement diningSet;

	public WebElement getStab() {
		return stab;
	}

	public WebElement getBtnsearch() {
		return btnsearch;
	}
	public List<WebElement> getProduct() {
		return product;
	}
	

}
