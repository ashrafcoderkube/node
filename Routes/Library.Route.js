
const express = require("express");
const router = express.Router();

const LibraryController = require("../Controllers/Library.Controller")

router.post("/" ,LibraryController.createLibrary);
router.get("/" ,LibraryController.getLibrary);
router.put("/" ,LibraryController.updateLibrary);
router.delete("/" ,LibraryController.deleteLibrary);

module.exports = router;
              