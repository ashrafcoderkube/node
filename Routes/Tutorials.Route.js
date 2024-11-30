
const express = require("express");
const router = express.Router();

const TutorialsController = require("../Controllers/Tutorials.Controller")

router.post("/" ,TutorialsController.createTutorials);
router.get("/" ,TutorialsController.getTutorials);
router.put("/" ,TutorialsController.updateTutorials);
router.delete("/" ,TutorialsController.deleteTutorials);

module.exports = router;
              