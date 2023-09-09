package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.baseclass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.signinpojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.*;
public class fbregisteration  extends baseclass{
	@Given("To launch the browser and maximize the window")
	public void to_launch_the_browser_and_maximize_the_window() {
	launchbrowser();
	windowMaximize();
	}

	@When("To launch url of fb application")
	public void to_launch_url_of_fb_application() {
	
		launchUrl("https://www.facebook.com/");
	}

	@When("To click the create new account button")
	public void to_click_the_create_new_account_button() {
	WebElement c = driver.findElement(By.xpath("//a[text()='Create new account']"));
	c.click();
	}
	
	@When("To pass firstname in firstname textbox")
	public void to_pass_firstname_in_firstname_textbox(DataTable d) throws InterruptedException {
		Thread.sleep(3000);
		Map<String, String> m = d.asMap(String.class, String.class);
		WebElement fn = driver.findElement(By.name("firstname"));
	passtext(m.get("firstname3"), fn);
	}

	@When("To pass secondname in secondname textbox")
	public void to_pass_secondname_in_secondname_textbox() {
		WebElement ln = driver.findElement(By.name("lastname"));
		passtext("kumar", ln);
	}

	@When("To pass mobileno or email in email textbox")
	public void to_pass_mobileno_or_email_in_email_textbox(DataTable d) {
		List<Map<String, String>> m = d.asMaps();
		WebElement e = driver.findElement(By.name("reg_email__"));
		passtext(m.get(1).get("password1"), e);
	}

	@When("To create new password using new password textbox")
	public void to_create_new_password_using_new_password_textbox() {
		WebElement pw = driver.findElement(By.name("reg_passwd__"));
		passtext("nithish", pw);
	}

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
		//CloseEntireBrowser();
	}


}
