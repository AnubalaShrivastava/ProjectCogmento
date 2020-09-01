Feature: Test the Edit functionality
Scenario: Edit company address
Given launch the browser and navigate to the URL
When  submit username and password
Then  should be logged in to home page
When click on setting gear in activity section
Then dropdown for activity option should come
When  select companies 
And click on first company link
Then Company detal information should come
When click on edit 
Then it should allow editing company information
And  edit company address
And  click on save
Then company information should be saved successfully