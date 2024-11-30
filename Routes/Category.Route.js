
const express = require("express");
const router = express.Router();

const CategoryController = require("../Controllers/Category.Controller")

router.post("/" ,CategoryController.createCategory);
router.get("/" ,CategoryController.getCategory);
router.put("/" ,CategoryController.updateCategory);
router.delete("/" ,CategoryController.deleteCategory);

module.exports = router;
              