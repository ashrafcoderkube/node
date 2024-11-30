
const express = require("express");
// Creating a router instance from express to define route handlers
const router = express.Router();

// Importing the Controllers 
const CategoryController = require("../Controllers/Category.Controller")

// Defining a route 
router.post("/" ,CategoryController.createCategory);
router.get("/" ,CategoryController.getCategory);
router.put("/" ,CategoryController.updateCategory);
router.delete("/" ,CategoryController.deleteCategory);

// Exporting the router instance to be used in other parts of the application
module.exports = router;
              