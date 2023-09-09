@Feature1
Feature: To validate the login functionality of facebook application

Background:
Given User has launch the browser and maximize the window
@Regression
Scenario: To validate login with valid user name and invalid password
When To launch the url of the facebook application
And  To pass valid username in email field
And To pass invalid password in password field
And To click the login button
And To check whether  navigate to home page are not
Then To close the browser

@Smoke
Scenario Outline: To validate the positive and negative combination of login functionality
When User has to hit the facebook url
And User has to pass the data "<emaildatas>" in email field
And User has to pass the data "<passworddatas>" in password field
And User has to cick the login button
Then User has to close the browser

Examples:
|emaildatas        |passworddatas|
|selenium@gmail.com|1234568      |
|abc@gmail.com     |gfjhkljsd 	 |
|sele@gmail.com    |sdfmjhuih  	 |
|nium@gmail.com    |dlvkdlknj    |  
|lenium@gmail.com  |9874562      |
|seleni@gmail.com  |kghshudg     |