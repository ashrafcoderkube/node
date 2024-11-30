
const express = require("express");
// Creating a router instance from express to define route handlers
const router = express.Router();

// Importing the Controllers 
const TutorialsController = require("../Controllers/Tutorials.Controller")

// Defining a route 
router.post("/" ,TutorialsController.createTutorials);
router.get("/" ,TutorialsController.getTutorials);
router.put("/" ,TutorialsController.updateTutorials);
router.delete("/" ,TutorialsController.deleteTutorials);

// Exporting the router instance to be used in other parts of the application
module.exports = router;
              