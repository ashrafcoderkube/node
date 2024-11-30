
const express = require("express");
// Creating a router instance from express to define route handlers
const router = express.Router();

// Importing the Controllers 
const KeywordsController = require("../Controllers/Keywords.Controller")

// Defining a route 
router.post("/" ,KeywordsController.createKeywords);
router.get("/" ,KeywordsController.getKeywords);
router.put("/" ,KeywordsController.updateKeywords);
router.delete("/" ,KeywordsController.deleteKeywords);

// Exporting the router instance to be used in other parts of the application
module.exports = router;
              