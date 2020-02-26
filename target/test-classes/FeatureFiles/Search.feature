Feature: To validate the Search functionality

  Background: 
    Given user is in mfDesign search page

  Scenario Outline: To verify search with multiple inputs
    When user enters "<items>" in search tab
    Then user click search button

    Examples: 
      | items              |
      | dining set         |
      | single seater sofa |
      
      Scenario: To verify search with mouse over option
      When user moves to Sofa option
      Then user click Bean bag
      