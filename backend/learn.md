## Step 1. Node.js Installation

- Download and install Node.js from:
  
      https://nodejs.org/en/download

- Verify the installation by running:

      node -v
      npm -v


## Step 2. VS Code Development Setup

- Create a folder for the backend project.
- Open the folder in VS Code.
- Open the integrated terminal.
- Check the installed versions:

      npm -v
      node -v


## Step 3. Backend Creation with Node.js and Express.js

- Initialize a Node.js project:

      npm init

- The above command creates a `package.json` file.
- `package.json` contains project information, scripts, and all project dependencies.
- Create an `index.js` file, which will be the main entry point of the backend application.


## Step-4: How to run Backend or normal javascript file with the help of node

### Difference between Node.js and Nodemon

- **Node.js**
  - Executes the JavaScript file once.
  - Any code changes require manually restarting the server.

- **Nodemon**
  - Automatically restarts the server whenever file changes are detected.
  - Useful during development.

### Run a normal JavaScript file

      node filename.js

- so we run  backend :
        - we write a script in package.json
        - we wrote two scripts one for dev and one for start
        - to run the scripts we go to main folder in terminal where package.json exists 
            **npm run --scriptkey--**


## step 5: Installation of express.js for creating backend server

- Install Express.js:

      npm i express

- The above command installs Express.js and adds it to the project's dependencies in `package.json`.
- Import the Express module in `index.js`, which is the main entry point.


### Sequence of Execution

- Import the Express module.
- Create an Express application.
- Define the server port.
- Create a route using the `GET` method.
- Send a response to the client using the `send()` method.
- Start the server using `listen()`.
- Open the browser and visit:

      http://localhost:port_number

- The browser displays the response sent by the server.

## Step 6. Installation of Required Packages

### Install Express.js

    npm i express

### Install Morgan (HTTP Request Logger)

    npm i morgan

### Install Sequelize (ORM)

    npm i sequelize

### Install PostgreSQL Driver

    npm i pg pg-hstore



## Step 7. PostgreSQL Database Setup

- Open **pgAdmin**.
- Create a new database.
- Connect the Node.js application with PostgreSQL using Sequelize.

## Step 8. Import Required Modules

- Import the required packages into `index.js`.
- like express, morgan, sequelize, datatypes

### Purpose of each module

- **Express** → Used to create the backend server.
- **Morgan** → Logs every HTTP request in the terminal.
- **Sequelize** → ORM used to communicate with PostgreSQL.
- **DataTypes** → Used while defining the database table columns.

## Step 9. Connect Backend with PostgreSQL Database

- Create a Sequelize instance.
- Provide the database credentials.
- Authenticate the connection.

```javascript
db.authenticate()
```

- If the connection is successful, the terminal displays:

      Database connected...

- Otherwise, an error message is displayed.

## Step 10. Create Database Table using Sequelize Model

- Create a model using `db.define()`.
- Define all table columns using **DataTypes**.

### Sync the database
- Creates the table in PostgreSQL.
- `force: true` drops the existing table and recreates it every time the server starts.

## Step 11. Create Express Server

- Create an Express application.
- Configure middleware.

### Middleware Used
- **morgan("combined")**
  - Logs every HTTP request in the terminal.

- **express.json()**
  - Parses incoming JSON data.
  - Makes request data available inside `req.body`.



## morgan formats :
       - combined - Displays detailed request information.
       - dev  - Displays colorful and concise logs and Shows request method, URL, status code, response time, and response size.
       - tiny  - Displays only essential request information and it is  Useful when minimal logging is required.


## How to Run and Test the Backend Using Postman

- Open the project folder in VS Code.
- Open the integrated terminal.
- Run the backend. [npm run dev OR npm start]
- Open Postman
- Click **New** or open a new request tab.
- Select **GET** method.
- Enter the URL and  The URL must match the route defined in your Express application.
- Click **Send**.


## Common HTTP Methods Used in Postman

- GET - Retrieve data from the server 
- POST - Create new data 
- PUT - Update an existing resource completely 
- PATCH - Update specific fields of a resource
- DELETE - Remove data from the server 

##  How to Send Product Data from Postman to the VS Code Terminal

- run the server in vs
- Open Postman
- Launch Postman.
- Click **New Request**.
- Choose **POST** from the method dropdown.
-  Enter the API URL
- Add the Request Body
- Click **Body**.
- Select **raw**.
- Choose **JSON** from the dropdown.
- Enter the product details
- Click the **Send** button.
- Postman sends the JSON data to the Express backend.

## Sequelize Database (ORM)
### What is Sequelize?

- **Sequelize** is an **Object-Relational Mapping (ORM)** library for Node.js.
- It is used to connect a Node.js application with relational databases.
- Instead of writing SQL queries manually, Sequelize provides JavaScript methods to perform database operations.
- It makes database interaction easier, faster, and more secure.

### What is ORM?

**ORM (Object-Relational Mapping)** is a technique that maps JavaScript objects to database tables.

### Methods

- get : read data 
- post : add new data
- put : update complete record
- patch : update specific fields
- delete : remove records

### how to see table in pgadmin

- click on database
- then click schemas
- then on table 
- in table right click on product
- edit/view option in it click on **view all rows**
