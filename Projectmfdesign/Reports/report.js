$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "To validate facebook login functionality",
  "description": "",
  "id": "to-validate-facebook-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in mfDesign login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefinition.user_is_in_mfDesign_login_page()"
});
formatter.result({
  "duration": 1216938500,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.util.concurrent.SimpleTimeLimiter.create(Ljava/util/concurrent/ExecutorService;)Lcom/google/common/util/concurrent/SimpleTimeLimiter;\r\n\tat org.openqa.selenium.net.UrlChecker.\u003cinit\u003e(UrlChecker.java:62)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.helperclass.BaseClass.launchBrowser(BaseClass.java:13)\r\n\tat com.stepDefinition.Loginstepdefinition.user_is_in_mfDesign_login_page(Loginstepdefinition.java:22)\r\n\tat ✽.Given user is in mfDesign login page(FeatureFiles/Login.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "To verify login with valid \u0026 invalid inputs",
  "description": "",
  "id": "to-validate-facebook-login-functionality;to-verify-login-with-valid-\u0026-invalid-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user enter valid and invalid email and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "jansenthil@gmail.com",
        "zjDB3254"
      ],
      "line": 9
    },
    {
      "cells": [
        "lavu123@gmail.com",
        "12345asfrwe"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefinition.user_enter_valid_and_invalid_email_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginstepdefinition.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "To validate the Search functionality",
  "description": "",
  "id": "to-validate-the-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To verify search with multiple inputs",
  "description": "",
  "id": "to-validate-the-search-functionality;to-verify-search-with-multiple-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003citems\u003e\" in search tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "to-validate-the-search-functionality;to-verify-search-with-multiple-inputs;",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 11,
      "id": "to-validate-the-search-functionality;to-verify-search-with-multiple-inputs;;1"
    },
    {
      "cells": [
        "dining set"
      ],
      "line": 12,
      "id": "to-validate-the-search-functionality;to-verify-search-with-multiple-inputs;;2"
    },
    {
      "cells": [
        "single seater sofa"
      ],
      "line": 13,
      "id": "to-validate-the-search-functionality;to-verify-search-with-multiple-inputs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in mfDesign search page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_in_mfDesign_search_page()"
});
formatter.result({
  "duration": 11974200,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.util.concurrent.SimpleTimeLimiter.create(Ljava/util/concurrent/ExecutorService;)Lcom/google/common/util/concurrent/SimpleTimeLimiter;\r\n\tat org.openqa.selenium.net.UrlChecker.\u003cinit\u003e(UrlChecker.java:62)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.helperclass.BaseClass.launchBrowser(BaseClass.java:13)\r\n\tat com.stepDefinition.SearchStepDefinition.user_is_in_mfDesign_search_page(SearchStepDefinition.java:18)\r\n\tat ✽.Given user is in mfDesign search page(FeatureFiles/Search.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "To verify search with multiple inputs",
  "description": "",
  "id": "to-validate-the-search-functionality;to-verify-search-with-multiple-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user enters \"dining set\" in search tab",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dining set",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinition.user_enters_in_search_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStepDefinition.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in mfDesign search page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_in_mfDesign_search_page()"
});
formatter.result({
  "duration": 17216600,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.util.concurrent.SimpleTimeLimiter.create(Ljava/util/concurrent/ExecutorService;)Lcom/google/common/util/concurrent/SimpleTimeLimiter;\r\n\tat org.openqa.selenium.net.UrlChecker.\u003cinit\u003e(UrlChecker.java:62)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.helperclass.BaseClass.launchBrowser(BaseClass.java:13)\r\n\tat com.stepDefinition.SearchStepDefinition.user_is_in_mfDesign_search_page(SearchStepDefinition.java:18)\r\n\tat ✽.Given user is in mfDesign search page(FeatureFiles/Search.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "To verify search with multiple inputs",
  "description": "",
  "id": "to-validate-the-search-functionality;to-verify-search-with-multiple-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user enters \"single seater sofa\" in search tab",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "single seater sofa",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinition.user_enters_in_search_tab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStepDefinition.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is in mfDesign search page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_in_mfDesign_search_page()"
});
formatter.result({
  "duration": 12596700,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.util.concurrent.SimpleTimeLimiter.create(Ljava/util/concurrent/ExecutorService;)Lcom/google/common/util/concurrent/SimpleTimeLimiter;\r\n\tat org.openqa.selenium.net.UrlChecker.\u003cinit\u003e(UrlChecker.java:62)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.helperclass.BaseClass.launchBrowser(BaseClass.java:13)\r\n\tat com.stepDefinition.SearchStepDefinition.user_is_in_mfDesign_search_page(SearchStepDefinition.java:18)\r\n\tat ✽.Given user is in mfDesign search page(FeatureFiles/Search.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "To verify search with mouse over option",
  "description": "",
  "id": "to-validate-the-search-functionality;to-verify-search-with-mouse-over-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user moves to Sofa option",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user click Bean bag",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});