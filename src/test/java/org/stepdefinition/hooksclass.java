package org.stepdefinition;

import org.base.baseclass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooksclass extends baseclass{
@Before(order = 1)
//precondition
private void precondition1() {
launchbrowser();
}

@Before(order = 2)
//precondition
private void precondition2() {
windowMaximize();
}

@Before(order = 3,value = "@Smoke")
//precondition
private void precondition3() {
System.out.println("precondition 3");
}

@After(order = 10,value = "@Smoke")
//postcondition
private void postcondition2() {
	System.out.println("Take  Screenshot of scenario");
}

@After(order = 4)
//postcondition
private void postcondition1() {
CloseEntireBrowser();
System.out.println("close the browser");
}
}
