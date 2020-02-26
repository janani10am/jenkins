Feature: To validate facebook login functionality

  Background: 
    Given user is in mfDesign login page
	
  Scenario: To verify login with valid & invalid inputs
    When user enter valid and invalid email and password
      | username             | password    |
      | jansenthil@gmail.com | zjDB3254    |
      | lavu123@gmail.com    | 12345asfrwe |
    Then user click login button
    
   
    
    
    
    
