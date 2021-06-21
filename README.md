# Laughing&Beyond (backend)

## Description:
A collection of Jokes, FunFacts and Quotes for laughter, learning and inspiration. 
Jointly created by Julia Christensen and Andrea Clark
* [Repository for Project 3 - frontend](https://github.com/aflack143/laughing-beyond-frontend)
* [Repository for  Project 3 - backend](https://github.com/aflack143/laughing-beyond-backend)

## Brief Example:
<img src="https://user-images.githubusercontent.com/80013194/122783463-352cc600-d277-11eb-8dd4-e1fa27f882ae.png" width="100" height="100">

Server.js<br>
<img src="https://user-images.githubusercontent.com/62125512/122476672-38306980-cf8c-11eb-99db-8ac05fa281ab.PNG" width="100" height="100">

Front-end Demo: http://laughing-beyond.surge.sh/

## Features:
**_Bronze_**:
* Home Page
    * Nav bar with links to each page(and back to Home)
    * Display a random item for each of the types (Jokes, FunFacts, Quotes)
* Jokes Page
    * Display random list of 10 jokes
    * Button to refresh for another random 10 jokes 
* FunFacts Page
    * Display random fun fact
    * Button to refresh for another random fun fact 
* User profile page
    * Sign-up and Login Pages
    * Edit profile

**_Silver_**:
* Jokes Page
    * Search using radio buttons for 4 types of jokes (Random, General, Knock-Knock, Programming)
    * Show/Hide all punchlines instead of individually
* FunFacts Page
    * User input number to display a random fact based on selected category
    
**_Gold / Future Enhancement_**:
* Jokes Page
    * Search box allowing to search for specific words in "setup" content (ie: road, array, cow, etc..)
    * Add a joke
* FunFacts Page
    * User input to display a random fact based on number/date selected
* Quotes Page
    * Display a random Quotes with name of Author
    * Search Author for all quotes said by them.
* User profile page
    * User Authentication
    * User Favorite Joke, Quote, FunFact
* User comments added to Joke, Quote, FunFact pages


## Technologies Used:
   Express, 
   Axios, 
   PG, 
   Sequelize, 
   Body-parser, 
   Bcryptjs, 
   Jsonwebtoken, 
   Cors, 
   Dotenv
   

## Getting Started:
<img src="https://user-images.githubusercontent.com/80013194/122136009-430dc180-ce07-11eb-9933-9ed9701f94ff.png" width="400">
<img src="https://user-images.githubusercontent.com/80013194/122136023-4c972980-ce07-11eb-9ffe-33aad8c87e1c.png" width="400">
<img src="https://user-images.githubusercontent.com/80013194/122136034-5325a100-ce07-11eb-8ba2-ba1cb73bd887.jpg" width="400">

**_To begin:_**: 
* Set up express routes and controllers
* Set up sequelize, creating a user table in the laughing-beyond_dev database
   * Note: we did not seed the users once we added the password hashing


**_Key notes_**: 
[Link to Asana](https://app.asana.com/0/1200474893168640/list)

### Sources: 
https://www.npmjs.com/package/dotenv <br>
http://expressjs.com/en/resources/middleware/cors.html <br>
https://flaviocopes.com/express-send-json-response/ <br>
