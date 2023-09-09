$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/fb.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the data \"\u003cpassworddatas\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to cick the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "selenium@gmail.com",
        "1234568"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "gfjhkljsd"
      ]
    },
    {
      "cells": [
        "sele@gmail.com",
        "sdfmjhuih"
      ]
    },
    {
      "cells": [
        "nium@gmail.com",
        "dlvkdlknj"
      ]
    },
    {
      "cells": [
        "lenium@gmail.com",
        "9874562"
      ]
    },
    {
      "cells": [
        "seleni@gmail.com",
        "kghshudg"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fblogin.user_has_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"selenium@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"1234568\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to cick the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_cick_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fblogin.user_has_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"abc@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"gfjhkljsd\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to cick the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_cick_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fblogin.user_has_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"sele@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"sdfmjhuih\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to cick the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_cick_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fblogin.user_has_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"nium@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"dlvkdlknj\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to cick the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_cick_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fblogin.user_has_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"lenium@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"9874562\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to cick the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_cick_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User has launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fblogin.user_has_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"seleni@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"kghshudg\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to cick the login button",
  "keyword": "And "
});
formatter.match({
  "location": "fblogin.user_has_to_cick_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/fbregisteration.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create a new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbregisteration.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "fbregisteration.to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "fbregisteration.to_click_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass firstname in firstname textbox",
  "rows": [
    {
      "cells": [
        "firstname1",
        "nithish"
      ]
    },
    {
      "cells": [
        "firstname2",
        "kumar"
      ]
    },
    {
      "cells": [
        "firstname3",
        "hari"
      ]
    },
    {
      "cells": [
        "firstname4",
        "gowtham"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "fbregisteration.to_pass_firstname_in_firstname_textbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass secondname in secondname textbox",
  "keyword": "And "
});
formatter.match({
  "location": "fbregisteration.to_pass_secondname_in_secondname_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or email in email textbox",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "abc@gmail",
        "9784754654",
        "nit@gmail"
      ]
    },
    {
      "cells": [
        "9988774455",
        "vj@gmail",
        "bhgf@gmail"
      ]
    },
    {
      "cells": [
        "332215544",
        "yy@gmail",
        "5545143"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "fbregisteration.to_pass_mobileno_or_email_in_email_textbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To create new password using new password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "fbregisteration.to_create_new_password_using_new_password_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbregisteration.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
});