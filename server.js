// Require in my dependencies
const express = require('express');
const mysql = require('mysql');
// Assign express() and create server
const app = express(); 

// Set up the PORT
const PORT = process.env.PORT || 8080;

// Middleware for Express to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require in the api and html routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Tell the PORT to listen
app.listen(PORT, ()=> {
    console.log(`Listening on PORT:${PORT}`);
});