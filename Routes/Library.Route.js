
const express = require("express");
// Creating a router instance from express to define route handlers
const router = express.Router();

// Importing the Controllers 
const LibraryController = require("../Controllers/Library.Controller")

// Defining a route 
router.post("/" ,LibraryController.createLibrary);
router.get("/" ,LibraryController.getLibrary);
router.put("/" ,LibraryController.updateLibrary);
router.delete("/" ,LibraryController.deleteLibrary);

// Exporting the router instance to be used in other parts of the application
module.exports = router;
              