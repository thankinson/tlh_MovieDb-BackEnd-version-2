# This project - abandond

This was an attempt to take my movie database and have it on a single schema only. Unfortuntly due to restraints with foreign keys i will not be continueing with this version.

Each movie added to a user cant have an ID set as unique. This causes the issue of another user not being able to add that movie to there own database.

Removing the unique value also caused the issue of being able to add multiple entrys of one film into the database.

# Learning outcomes

From this project i have learned:
        1. How to set up a single schema with an array inside
        2. How to use $addToSet and $pull to add and remove from the DB
        3. You cant set unique ID's within the array of items as it prevents other users from addingthe same movie to there list
        4. That this will be better if i used a joining table instead. 

# This is part of a personal project i am working on.

The aim of this rest api is to support a front end that will represent my own movie database of dvd/blu-ray i own. 

Full basic crud has been added .

This Web application uses
    
    Express JS
    CORS
    Bcryptjs
    Dotenv
    Jsonwebtoken
    Mongoose
    

