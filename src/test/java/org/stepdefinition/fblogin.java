package org.stepdefinition;

import org.base.baseclass;
import org.pojo.flippojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class fblogin extends baseclass {
	flippojo f;

	@Given("User has launch the browser and maximize the window")
	public void user_has_launch_the_browser_and_maximize_the_window() {
	launchbrowser();
	windowMaximize();
	}

	@When("User has to hit the facebook url")
	public void user_has_to_hit_the_facebook_url() {
	launchUrl("https://www.facebook.com/");
	}

	@When("User has to pass the data {string} in email field")
	public void user_has_to_pass_the_data_in_email_field(String email) {
	f= new flippojo();
	passtext(email, f.getEmail());
	}

	@When("User has to pass the data {string} in password field")
	public void user_has_to_pass_the_data_in_password_field(String pass) {
		f=new flippojo();
		passtext(pass, f.getPass());
	}

	@When("User has to cick the login button")
	public void user_has_to_cick_the_login_button() {
	f= new flippojo();
	clickbtn(f.getLoginbtn());
	}

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		CloseEntireBrowser();

	}




}
