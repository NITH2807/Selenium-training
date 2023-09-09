package org.pojo;

import org.base.baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class signinpojo extends baseclass{
public void signipojo() {
PageFactory.initElements(driver, this);
}
@FindBy(xpath = "//a[text()='Create new account']")
private WebElement createNewAcc ; 

@FindBy(name = "firstname")
private WebElement firstname;

@FindBy(name = "lastname")
private WebElement lastname;

@FindBy(name = "reg_email__")
private WebElement mobilenooremail;

@FindBy(name = "reg_passwd__")
private WebElement newpassword;

public WebElement getCreatenewacc() {
	return createNewAcc;
}

public WebElement getFirstname() {
	return firstname;
}

public WebElement getLastname() {
	return lastname;
}

public WebElement getMobilenooremail() {
	return mobilenooremail;
}

public WebElement getNewpassword() {
	return newpassword;
}
}
