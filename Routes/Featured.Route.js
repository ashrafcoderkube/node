
const express = require("express");
// Creating a router instance from express to define route handlers
const router = express.Router();

// Importing the Controllers 
const featureController = require("../Controllers/Feature.Controller")

// Defining a route 
router.get("/" ,featureController.getFeaturedTutorials);

// Exporting the router instance to be used in other parts of the application
module.exports = router;