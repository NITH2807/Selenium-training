package org.pojo;

import org.base.baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class flippojo extends baseclass {

	public flippojo() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//input[@id=\"email\"]")
	private WebElement email;

	@FindBy(xpath = "//input[@id=\"pass\"]")
	private WebElement pass;

	@FindBy(xpath = "//button[@data-testid=\"royal_login_button\"]")
	private WebElement loginbtn;

	public WebElement getEmail() {
		return email;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getLoginbtn() {
		return loginbtn;
	}

}
