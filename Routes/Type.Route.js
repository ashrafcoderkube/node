
const express = require("express");
// Creating a router instance from express to define route handlers
const router = express.Router();

// Importing the Controllers 
const TypeController = require("../Controllers/Type.Controller")

// Defining a route 
router.post("/" ,TypeController.createType);
router.get("/" ,TypeController.getType);
router.put("/" ,TypeController.updateType);
router.delete("/" ,TypeController.deleteType);

// Exporting the router instance to be used in other parts of the application
module.exports = router;
              