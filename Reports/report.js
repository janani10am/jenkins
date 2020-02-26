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
  "duration": 41717979600,
  "status": "passed"
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
  "duration": 4304944000,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 970901300,
  "status": "passed"
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
  "duration": 30382668000,
  "status": "passed"
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
  "location": "SearchStepDefinition.user_eners_in_search_tab(String)"
});
formatter.result({
  "duration": 840693400,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_click_search_button()"
});
formatter.result({
  "duration": 5040594100,
  "status": "passed"
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
  "duration": 22615508500,
  "status": "passed"
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
  "location": "SearchStepDefinition.user_eners_in_search_tab(String)"
});
formatter.result({
  "duration": 881824700,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.user_click_search_button()"
});
formatter.result({
  "duration": 5407516000,
  "status": "passed"
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
  "duration": 20253342600,
  "status": "passed"
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