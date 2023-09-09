@Feature2
Feature: To validate the account creation of fb application

@Sanity
Scenario: To create a new account
Given To launch the browser and maximize the window
When  To launch url of fb application
And To click the create new account button


And To pass firstname in firstname textbox

|firstname1|nithish|
|firstname2|kumar|
|firstname3|hari|
|firstname4|gowtham|

And To pass secondname in secondname textbox

And To pass mobileno or email in email textbox
|password1|password2|password3|
|abc@gmail|9784754654|nit@gmail|
|9988774455|vj@gmail|bhgf@gmail|
|332215544|yy@gmail|5545143|

And To create new password using new password textbox
Then To close the chrome browser
