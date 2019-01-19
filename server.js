// Require in my dependencies
const express = require('express');
const path = require('path');
// Assign express() and create server
const app = express(); 

// Set up the PORT
const PORT = process.env.PORT || 8080;

// Middleware for Express to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require in the api and html routes 
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

// Tell the PORT to listen
app.listen(PORT, ()=> {
    console.log(`Listening on PORT:${PORT}`);
});