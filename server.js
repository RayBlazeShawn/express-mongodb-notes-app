// Require the dotenv package. This package loads environment variables from a .env file into process.env.
require('dotenv').config();
const apiRoute = require('./routes/api');

// Require the mongoose package. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
const mongoose = require('mongoose');

// Require the express package. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const express = require('express');

// Create an instance of express to start a new Express app.
const app = express();

// This will be the port our server will listen on.
const port = 3000;

// telling Express to serve static files from a directory named public.
app.use(express.static('public'));

// The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// Middleware is a way to intercept data between the request and the response.
// In this case, express.json() is used to parse the body of the request and convert it to JSON format.
app.use(express.json());

// Here we're using mongoose to connect to our MongoDB database.
// process.env.DB_CONNECTION is a secure way to store the URI of your database. It will look for a "DB_CONNECTION" variable in the .env file.
// The options object { useNewUrlParser: true, useUnifiedTopology: true } is passed to deal with MongoDB Deprecation warnings.
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to DB!"))
    .catch((err) => console.error(err));

app.use('/api', apiRoute);

// app.listen starts up the server on a specific port (3000 in this case) and a callback function is run once the server has started.
// It essentially tells our server to "listen" for requests on the specified port, creating an open line of communication.
app.listen(port, () => console.log(`Server started on port ${port}`));
